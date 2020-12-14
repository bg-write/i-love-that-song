// /routes/games.js
const router = require('express').Router();
const albumsCtrl = require('../controllers/albums');

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) return next();
	res.redirect('/auth/google');
}

module.exports = router;
