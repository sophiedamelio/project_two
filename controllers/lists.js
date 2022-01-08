const User = require("../models/user");
const List = require("../models/list");

// click on list to see its details
// method GET - listCtrl.show - view details of a book
// route is /lists/:id

module.exports = {
  index,
  create: createList,
  // delete: deleteList,
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

function createList(req, res) {
  List.create(req.body, function (err, list) {
    res.redirect(`/lists`);
  });
}

// function deleteList(req, res) {
//   // List.findOne({ _id: req.params.id, user: req.user }, function (err) {
//   //   user;
//   res.redirect("/lists");
// }
// }
