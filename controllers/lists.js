const User = require("../models/user");
const List = require("../models/list");

module.exports = {
  index,
};

function index(req, res, next) {
  List.find({}, function (err, listDocuments) {
    res.render("lists/index", {
      title: "Lists",
      lists: listDocuments,
    });
  });
}
