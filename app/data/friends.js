const friends = [
	{
		"name": "Megan Fox",
		"photo": "https://images-na.ssl-images-amazon.com/images/I/91Evyqztd6L._SY664_.jpg",
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
		"name": "Kate Upton",
		"photo": "https://cdn.images.express.co.uk/img/dynamic/12/590x/secondary/kate-upton-831627.jpg",
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
		"name": "Alexa Bliss",
		"photo": "http://www.wwe.com/f/styles/gallery_img_l/public/all/2017/08/005_NXT_01272016jg_1429--edb0a1883437f622f544ea3388f9b572.jpg",
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

function Friends() {
	this.friendsList = friends;

}

module.exports = Friends;