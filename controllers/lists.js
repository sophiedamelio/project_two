const User = require("../models/user");
const List = require("../models/list");

module.exports = {
  index,
  create,
};

function index(req, res, next) {
  List.find({}, function (err, listDocuments) {
    res.render("lists/index", {
      title: "Lists",
      lists: listDocuments,
    });
  });
}

function create(req, res) {
  User.findById(req.params.id, function (err, userDocument) {
    req.body.user = userDocument._id;
    List.create(req.body, function (err, list) {
      res.redirect(`/lists/${userDocument._id}`);
    });
  });
}
