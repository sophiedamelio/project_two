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

  console.log(req.params.id)
  // req.params.id is the listDoc ID
  List.findById(req.params.id, function(err, listDoc) {
    // listDoc = req.params.id;
    
      // need to edit the itemsSchema
      // pop? take off the item that is req.params.id??
      // .filter?
    // this says find the 

    // i think it is deleting the list, not the item right now

    const itemToBeDeleted = listDoc.items.filter((item, index, arr) => {
      // pop deletes it?
      // this currently selects two items...
      arr.pop()
      return item
    });

    console.log(itemToBeDeleted , `<-- item to be deleted`);
    
    listDoc.save(function (err) {
    res.redirect(`/lists/${listDoc._id}`); // this line might be messing with it?
    });

  });
}


