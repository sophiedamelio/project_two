const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const itemsSchema = new Schema({
  details: String,
  purchased: {
    type: Boolean,
    default: false,
  }
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
