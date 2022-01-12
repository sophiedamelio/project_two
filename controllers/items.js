const List = require("../models/list");
const Items = require("../models/list");

// var chalk = import("chalk");

module.exports = {
  create: createItem,
  delete: deleteItem,
};

function createItem(req, res, next) {


  List.findById(req.params.listId, function (err, list) {
    // // req.body.list = listDoc._id;
    // List.items.create(req.body, function (err, item) {
    //   res.redirect(`/lists/${listDoc._id}`);
    // });
    // });
    // req.body = listDoc.items;
    // want to display the whole items prop of list here

    list.user = req.user._id
    list.save();

    list.items.push(req.body);
    list.save(function (err) {
      res.redirect(`/lists/${list._id}`);
    });
  });
}

// delete an item off of a list (check it as purchased)
// method DELETE  - itemCtrl.delete?
// /items/:id

function deleteItem(req, res, next) {
  List.findById(req.params.listId, function(err, listDoc) {
    
  // this is a mongoose method for filtering/searching / pulling a specific listDoc
  // this is based on req.params.itemId, which is the item that was clicked on 
  // to be deleted
    listDoc.items.pull({_id: req.params.itemId});

    console.log(listDoc.items, `<-- item to be deleted`);

    listDoc.save(function (err) {
      res.redirect(`/lists/${listDoc._id}`); // this line might be messing with it?
    });
  });
}


