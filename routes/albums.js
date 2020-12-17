const router = require('express').Router();
const albumsCtrl = require('../controllers/albums');

router.get('/new', isLoggedIn, albumsCtrl.new);
router.post('/search', isLoggedIn, albumsCtrl.search);
router.get('/:id', isLoggedIn, albumsCtrl.show);
router.post('/:id/listen', isLoggedIn, albumsCtrl.addToListenList);
router.delete('/:id/listen', isLoggedIn, albumsCtrl.removeFromListenList);
router.post('/:id/collection', isLoggedIn, albumsCtrl.addToCollection);
router.delete('/:id/collection', isLoggedIn, albumsCtrl.removeFromCollection);

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) return next();
	res.redirect('/auth/google');
}

module.exports = router;
