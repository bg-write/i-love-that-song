const Album = require('../models/album');
const axios = require('axios');

module.exports = {
	new: newAlbum,
	search,
	show,
};

function newAlbum(req, res) {
	res.render('albums/new', {
		title: 'Album Search',
		user: req.user,
		results: null,
	});
}

function search(req, res) {
	axios
		.get(
			`https://api.discogs.com/database/search?q=${req.body.query}&token=KEaTNesXGDaOPnHYRCZDKdlZjdIHloiveBrFzqIA`
		)
		.then((response) => {
			console.log(response.data.results);
			res.render('albums/new', {
				title: 'Album Search',
				user: req.user,
				results: response.data.results,
			});
		});
}

function show(req, res) {
	axios
		.get(
			`https://api.discogs.com/database/search?q=${req.params.id}&token=KEaTNesXGDaOPnHYRCZDKdlZjdIHloiveBrFzqIA`
		)
		.then((response) => {
			res.render('albums/show', {
				title: 'Album Details',
				user: req.user,
				album: response.data,
			});
		});
}
