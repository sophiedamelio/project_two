const express = require("express");
const router = express.Router();
const itemsCtrl = require("../controllers/items");

router.post("/lists/:id/items", itemsCtrl.create);

module.exports = router;
