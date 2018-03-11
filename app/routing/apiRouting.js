//Create dependencies
const bodyParser = require("body-parser");
const friends = require("../data/friends.js");

//export function
module.exports = function(router) {
	//Get function to extract all data
	router.get("/api/friendslist", function(req, res) {
		res.json(friends);
	});

	//Post function to find data and finally insert
	router.post("/api/findFriend", function(req, res) {
		//Store passed data from javascript into variable
		const newFriend = req.body;
		//Create new object with data from front end
		//Workaround from array property auto renaming 
		let newObj = {
			name: newFriend.name,
			photo: newFriend.photo,
			scores: newFriend["scores[]"]
		};

		//Will store all added up differences scores for each object in array
		let findMatch = [];

		//Run for each object stored in array
		friends.forEach((friend) => {
			//Create array to store difference for each value in both arrays
			let scoresCompareResults = [];
			//Run for each value in array inside object
			friend.scores.forEach((score) => {
				let i = 0; //Used to pass through newObj array
				//Calculate diffrence of each friends.score to newObj.scores (user's input), 
				//store it as possitive regarless of values, each score to match index
				let matchScores = Math.abs(parseInt(score) - newObj.scores[i]);
				//store difference into array
				scoresCompareResults.push(matchScores);
				i++; //add to match current loop
			})
			//After previous loop finish, add up all values from array
			let addAllScores = scoresCompareResults.reduce((a, b) => a + b, 0);
			//Push the sum into findMatch array, score index matches up through currently looped object
			findMatch.push(addAllScores);
			//reset scores array
			scoresCompareResults = []
		})
		//Get index value of lowest total score of findIndext
		const returnMatched = findMatch.indexOf(Math.min.apply(Math, findMatch));
		//Use index value of lowest total score to return data to front end 
		res.json(friends[returnMatched]);
		//add user input data API
		friends.push(newObj);
	});
}