const Album = require('../models/album');
const axios = require('axios');

module.exports = {
	new: newAlbum,
	search,
	show,
	addToListenList,
	removeFromListenList,
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
		.get(`https://api.discogs.com/artists/${req.params.id}`)
		.then((response) => {
			console.log(response.data);
			res.render('albums/show', {
				title: 'Album Details',
				user: req.user,
				album: response.data,
			});
		})
		.catch((err) => {
			console.log(err);
		});
}

function addToListenList(req, res) {
	req.user.listenList.push(req.body);
	req.user.save().then(() => {
		res.redirect(`/albums/${req.body.id}`);
	});
}

function removeFromListenList(req, res) {
	let idx = req.user.listenList.findIndex((a) => a.id === req.params.id);
	req.user.listenList.splice(idx, 1);
	req.user.save().then(() => {
		res.redirect(`/albums/${req.body.id}`);
	});
}
