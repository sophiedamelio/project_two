const List = require("../models/list");

module.exports = {
  create: createItem,
  delete: deleteItem,
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

// delete an item off of a list (check it as purchased)
// method DELETE  - itemCtrl.delete?
// /items/:id

function deleteItem(req, res, next) {

  List.findById(req.params.id, function(err, listDoc) {
    // listDoc = req.params.id;
    
    Item.findOne(req.params.id, function (err, itemDoc) {
      // need to edit the itemsSchema
      // pop? take off the item that is req.params.id??
      // .filter?

      listDoc.items.splice(1)
      listDoc.save(function (err) {
    res.redirect(`/lists/${itemDoc._id}`);
      });
  })
});
}


