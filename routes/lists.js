var express = require("express");
var router = express.Router();

const listCtrl = require("../controllers/lists");

router.get("/lists", listCtrl.index);

module.exports = router;
