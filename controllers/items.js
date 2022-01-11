const List = require("../models/list");
const Items = require("../models/list");

// var chalk = import("chalk");

module.exports = {
  create: createItem,
  delete: deleteItem,
};

function createItem(req, res, next) {
  List.findById(req.params.listId, function (err, listDoc) {
    // // req.body.list = listDoc._id;
    // List.items.create(req.body, function (err, item) {
    //   res.redirect(`/lists/${listDoc._id}`);
    // });
    // });
    // req.body = listDoc.items;
    // want to display the whole items prop of list here

    

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
  // try logging out step by step, see what I am accessing (req.params.id, etc)

  // console.log(req.params.id)
  // req.params.id is the listDoc ID
  List.findById(req.params.listId, function(err, listDoc) {
    // listDoc = req.params.id;
    
   
    // listDoc.items._id === req.params.id once we found the item?
    // Items.find(req.params.id, function (err, itemDoc) {


    
  listDoc.items.pull({_id: req.params.itemId});
  // ( item => item._id === req.params.itemId);
     
      // this currently selects multiple items...

      // this filter function needs to involve this
      // console.log(listDoc.items[0]["_id"], '<-- item to be deleted?') OR

      // the req.params.id of the item that is clicked on
      // arr.pop()
    
  console.log(listDoc.items, `<-- item to be deleted`);

    listDoc.save(function (err) {
    res.redirect(`/lists/${listDoc._id}`); // this line might be messing with it?
    });

  // });
});
}


