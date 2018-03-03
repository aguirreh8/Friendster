const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const htmlRoutes = require("./routing/htmlRouting.js");
const apiRoutes = require("./routing/apiRouting.js");


const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// This has to go to friends.js
const friends = [
	{
		"name": "Cat",
		"photo": "https://www.petmd.com/sites/default/files/petmd-cat-happy-10.jpg",
		"scores": [
			1,
			2,
			4,
			5,
			2,
			1,
			4,
			2,
			3,
			5
		]
	},
	{
		"name": "Puppy",
		"photo": "https://www.merriam-webster.com/assets/mw/images/article/art-wap-landing-mp-lg/puppy-3143-ad4140d8f6055cda2cd8956d4af37ea9@1x.jpg",
		"scores": [
			1,
			2,
			4,
			3,
			2,
			1,
			4,
			2,
			3,
			5
		]
	},
	{
		"name": "Parrot",
		"photo": "https://cindyknoke.files.wordpress.com/2017/11/dsc02645.jpg",
		"scores": [
			5,
			1,
			3,
			2,
			4,
			3,
			1,
			3,
			1,
			5
		]
	}
];

//End of friends.js

app.use('/', htmlRoutes);
app.use('/survey', htmlRoutes);

//This needs to go to apiRouting.js
app.get("/api/friendslist", function(req, res) {
	res.json(friends);
});

app.post("/api/findFriend", function(req, res) {
	const newFriend = req.body;
	let newObj = {
		name: newFriend.name,
		photo: newFriend.photo,
		scores: newFriend["scores[]"]
	};

	let findMatch = [];
	friends.forEach((friend) => {
		let scoresCompareResults = [];
		friend.scores.forEach((score) => {
			let i = 0;
			let matchScores = Math.abs(parseInt(score) - newObj.scores[i]);
			scoresCompareResults.push(matchScores);
			i++;
		})
		let addAllScores = scoresCompareResults.reduce((a, b) => a + b, 0);
		findMatch.push(addAllScores);
		scoresCompareResults = []
	})

	const returnMatched = findMatch.indexOf(Math.min.apply(Math, findMatch));
	res.json(friends[returnMatched]);
	friends.push(newObj);
});
//End of apiRouting.js

app.listen(PORT);