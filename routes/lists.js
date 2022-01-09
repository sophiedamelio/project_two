var express = require("express");
var router = express.Router();

const listCtrl = require("../controllers/lists");

router.get("/lists", listCtrl.index);

router.post("/lists", listCtrl.create);
router.delete("/lists/:id", listCtrl.delete);
// show page
router.get("/lists/:id", listCtrl.show);
router.post("/lists/:id", listCtrl.create);

module.exports = router;
