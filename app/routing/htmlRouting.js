//Create dependencies
const express = require('express');
const router = express.Router(); //use Router to create routes
const path = require("path");

//define routing for root
router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

//define routing for survey.html
router.get("/survey", function(req, res) {
	res.sendFile(path.join(__dirname, "../public/survey.html"));
});

//export Router routings
module.exports = router;