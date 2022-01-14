var express = require("express");
var router = express.Router();

const listCtrl = require("../controllers/lists");


router.get("/", isLoggedIn, listCtrl.index);
router.post("/", isLoggedIn, listCtrl.create);
router.get("/:listId", isLoggedIn, listCtrl.show);
router.post("/:id", isLoggedIn, listCtrl.create);
router.delete("/:listId", isLoggedIn, listCtrl.delete);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

module.exports = router;
