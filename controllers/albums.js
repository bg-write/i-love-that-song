const Album = require('../models/album');
const axios = require('axios');

module.exports = {
	new: newAlbum,
	search,
	show,
	addToListenList,
	removeFromListenList,
	addToCollection,
	removeFromCollection,
	index,
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
		})
		.catch((err) => {
			console.log(err);
		});
}

function show(req, res) {
	axios
		.get(`https://api.discogs.com/masters/${req.params.id}`)
		// axios .get chain? Promises lecture
		.then((response) => {
			console.log(response.data);
			Album.findOne({ id: response.data.id })
				.populate('favoritedBy')
				.then((album) => {
					if (album) {
						res.render('albums/show', {
							title: 'Album Details',
							user: req.user,
							album: response.data,
							favoritedBy: album.favoritedBy,
							albumId: album._id,
							reviews: album.reviews,
						});
					} else {
						res.render('albums/show', {
							title: 'Album Details',
							user: req.user,
							album: response.data,
							favoritedBy: ['No one (yet!)'],
							reviews: ['None (yet!)'],
						});
					}
				});
		})
		.catch((err) => {
			console.log(err);
		});
}

function addToListenList(req, res) {
	req.user.listenList.push(req.body);
	req.user
		.save()
		.then(() => {
			res.redirect(`/albums/${req.body.id}`);
		})
		.catch((err) => {
			console.log(err);
		});
}

function removeFromListenList(req, res) {
	let idx = req.user.listenList.findIndex((a) => a.id === req.params.id);
	req.user.listenList.splice(idx, 1);
	req.user
		.save()
		.then(() => {
			res.redirect(`/albums/${req.body.id}`);
		})
		.catch((err) => {
			console.log(err);
		});
}

function addToCollection(req, res) {
	Album.findOne({ id: req.body.id })
		.then((album) => {
			if (album) {
				album.favoritedBy.push(req.user._id);
				album.save().then(() => {
					res.redirect(`/albums/${req.body.id}`);
				});
			} else {
				req.body.favoritedBy = req.user._id;
				Album.create(req.body).then(() => {
					res.redirect(`/albums/${req.body.id}`);
				});
			}
		})
		.catch((err) => {
			console.log(err);
		});
}

function removeFromCollection(req, res) {
	Album.findOne({ id: req.params.id })
		.then((album) => {
			let idx = album.favoritedBy.indexOf(req.user._id);
			album.favoritedBy.splice(idx, 1);
			album.save().then(() => {
				res.redirect(`/albums/${req.body.id}`);
			});
		})
		.catch((err) => {
			console.log(err);
		});
}

function index(req, res) {
	Album.find({ favoritedBy: req.user._id })
		.then((albums) => {
			res.render('albums/index', {
				title: 'Album Collection',
				user: req.user,
				albums,
			});
		})
		.catch((err) => {
			console.log(err);
		});
}
