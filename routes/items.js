const express = require("express");
const router = express.Router();
const itemsCtrl = require("../controllers/items");

router.post("/lists/:listId/items", itemsCtrl.create);

router.delete("/lists/:listId/items/:itemId", itemsCtrl.delete);

module.exports = router;
