const mongoose = require("mongoose");

const itemsSchema = new mongoose.Schema({
  details: String,
  purchased: Boolean,
});

const listSchema = new mongoose.Schema(
  {
    user: Schema.Types.ObjectId,
    title: String,
    items: [itemsSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("List", listSchema);
