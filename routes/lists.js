var express = require("express");
var router = express.Router();

const listCtrl = require("../controllers/lists");

router.get("/lists", listCtrl.index);

router.post("/lists", isLoggedIn, listCtrl.create);
// show page
router.get("/lists/:id", listCtrl.show);
router.post("/lists/:id", listCtrl.create);

router.delete("/lists/:id", listCtrl.delete);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

module.exports = router;
