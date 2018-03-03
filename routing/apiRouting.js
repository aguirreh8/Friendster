const bodyParser = require("body-parser");
const friends = require("../app/data/friends.js");

module.exports = function(router) {
	router.get("/api/friendslist", function(req, res) {
		res.json(friends);
	});

	router.post("/api/findFriend", function(req, res) {
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
}