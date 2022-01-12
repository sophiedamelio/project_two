const User = require("../models/user");
const List = require("../models/list");

// click on list to see its details
// method GET - listCtrl.show - view details of a book
// route is /lists/:id

// delete a list
// method DELETE - listCtrl.delete
// URL endppoint is /lists/:id


module.exports = {
  index,
  create: createList,
  delete: deleteList,
  show,
};

function show(req, res, next) {
  List.findById(req.params.listId, function (err, list) {
    res.render(`lists/show`, {
      title: "List details",
      list,
    });
  });
}

function index(req, res, next) {
  // how to access the user who is logged in's ID
  // let loggedInUser = // ?
  // console.log(loggedInUser, '<-- user who is logged in ID?')
  

  // only allow / show the ones that user made
  // wiring qrueiries should add the user googleID to them
  //  console.log(req.user._id, "user google id")

  List.find({user: req.user._id}, function (err, listDocuments) {
    res.render("lists/index", {
      title: "Lists",
      lists: listDocuments,
    });
  });
}

function createList(req, res, next) {
  List.create(req.body, function (err, list) {
    // this assigns this list's user to the req.user._id
    list.user = req.user._id
    list.save();
    res.redirect('/lists');
  });
}

function deleteList(req, res, next) {
  if (!req.params.listId) return; // (if the req.params.id does not exist, exit function)

  List.findOneAndDelete(req.params.listId, function (err, listDoc) {
    res.redirect( "/lists");
  });
}
