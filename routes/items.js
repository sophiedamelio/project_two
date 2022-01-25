const express = require("express");
const router = express.Router();
const itemsCtrl = require("../controllers/items");

router.post("/:listId", isLoggedIn, itemsCtrl.create);
router.delete("/:listId", isLoggedIn, itemsCtrl.delete);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }
  
module.exports = router;
