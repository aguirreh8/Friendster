const express = require('express');
const router = express.Router();
const path = require("path");
const bodyParser = require("body-parser");
const Friends = require("../app/data/friends.js");

const friendsConst = new Friends();
const friends = friendsConst.friendsList;

router.get("/survey", function(req, res) {
	res.json(friends);
});

module.exports = router;