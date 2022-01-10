const express = require("express");
const router = express.Router();
const itemsCtrl = require("../controllers/items");

router.post("/lists/:id/items", itemsCtrl.create);

router.delete("/lists/:id/items", itemsCtrl.delete);

module.exports = router;
