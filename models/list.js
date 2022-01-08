const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// click on list to see its details
// method GET - listCtrl.show - view details of a book
// route is /lists/:id

const itemsSchema = new Schema({
  details: String,
  purchased: Boolean,
});

const listSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    title: String,
    items: [itemsSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("List", listSchema);
