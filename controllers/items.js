const List = require("../models/list");

module.exports = {
  create: createItem,
};

function createItem(req, res, next) {
  List.findById(req.params.id, function (err, listDoc) {
    // // req.body.list = listDoc._id;
    // List.items.create(req.body, function (err, item) {
    //   res.redirect(`/lists/${listDoc._id}`);
    // });
    // });
    // req.body = listDoc.items;
    // want to display the whole items prop of list here

    // this makes a new list right now

    listDoc.items.push(req.body);
    listDoc.save(function (err) {
      res.redirect(`/lists/${listDoc._id}`);
    });
  });
}
