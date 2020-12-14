const router = require('express').Router();
const albumsCtrl = require('../controllers/albums');

router.get('/new', isLoggedIn, albumsCtrl.new);
router.post('/search', isLoggedIn, albumsCtrl.search);

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) return next();
	res.redirect('/auth/google');
}

module.exports = router;
