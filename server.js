const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// This has to go to friends.js
const friends = [
	{
		"name": "person",
		"photo": "img.png",
		"scores": [
			1,
			2,
			3,
			4,
			5,
			1,
			2,
			3,
			4,
			5,
		]
	},
	{
		"name": "human",
		"photo": "img.jpg",
		"scores": [
			1,
			2,
			3,
			4,
			5,
			1,
			2,
			3,
			4,
			5,
		]
	},
	{
		"name": "guy",
		"photo": "img.gif",
		"scores": [
			1,
			2,
			3,
			4,
			5,
			1,
			2,
			3,
			4,
			5,
		]
	}
];

//End of friends.js

//this needs to go to htmlRouting.js
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "public/home.html"));
});

app.get("/survey", function(req, res) {
	res.sendFile(path.join(__dirname, "public/survey.html"));
});
// end of htmlRouting.js

//This needs to go to apiRouting.js
app.get("/api/friendslist", function(req, res) {
	res.json(friends);
});

app.post("/api/findFriend", function(req, res) {
	const newFriend = req.body;
	friends.push(newFriend);
	console.log(newFriend);
	return res.json(newFriend);
});
//End of apiRouting.js

app.listen(PORT);