const Album = require('../models/album');
const axios = require('axios');

module.exports = {
	new: newAlbum,
	search,
};

function newAlbum(req, res) {
	res.render('albums/new', {
		title: 'Album Search',
		user: req.user,
		results: null,
	});
}

// update this for Discogs API
function search(req, res) {
	axios
		.get(`https://api.rawg.io/api/games?page_size=5&search=${req.body.query}`)
		.then((response) => {
			console.log(response.data.results);
			res.render('albums/new', {
				title: 'Album Search',
				user: req.user,
				results: response.data.results,
			});
		});
}
