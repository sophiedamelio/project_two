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
  List.findById(req.params.id, function (err, list) {
    res.render(`lists/show`, {
      title: "List details",
      list,
    });
  });
}

function index(req, res, next) {
  List.find({}, function (err, listDocuments) {
    res.render("lists/index", {
      title: "Lists",
      lists: listDocuments,
    });
  });
}

function createList(req, res, next) {
  List.create(req.body, function (err, list) {
    res.redirect(`/lists`);
  });
}

function deleteList(req, res, next) {
  console.log(req.params.id);
  // if (!req.params.id) return; // (if the req.params.id does not exist, exit function)
  List.findOneAndDelete(req.params.id, function (err, list) {
    res.redirect(err, "/lists", {
      list,
    });
  });
  // List.deleteOne(req.params.id);
  // res.redirect("/lists");
}
