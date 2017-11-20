var express                 = require('express'),
    middleware              = require("../middleware");
var router = express.Router({mergeParams: true});

router.get("/", middleware.canRead, function(req, res) {
    res.render("pricelist");
});

router.get("/currentUser", middleware.isLoggedInJSON, function(req, res) {
    var priv = {};
    priv.read = req.user.read;
    priv.write = req.user.write;
    res.send(priv);
});

module.exports = router;