var express = require("express");
var router = express.Router();

const listCtrl = require("../controllers/lists");

router.get("/lists", isLoggedIn, listCtrl.index);

router.post("/lists", isLoggedIn, listCtrl.create);
// show page
router.get("/lists/:listId", isLoggedIn, listCtrl.show);
router.post("/lists/:id", isLoggedIn, listCtrl.create);

router.delete("/lists/:listId", isLoggedIn, listCtrl.delete);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

module.exports = router;
