const router = require('express').Router();
const albumsCtrl = require('../controllers/albums');

router.get('/new', isLoggedIn, albumsCtrl.new);
router.post('/search', isLoggedIn, albumsCtrl.search);
router.get('/:id', isLoggedIn, albumsCtrl.show);
router.post('/:id/listen', isLoggedIn, albumsCtrl.addToListenList);
router.delete('/:id/listen', isLoggedIn, albumsCtrl.removeFromListenList);

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) return next();
	res.redirect('/auth/google');
}

module.exports = router;
