const router = require('express').Router();
const messagesCtrl = require('../controllers/messages');

router.get('/', isLoggedIn, messagesCtrl.index);
router.post('/', isLoggedIn, messagesCtrl.create);
router.get('/:id', isLoggedIn, messagesCtrl.show);
router.post('/:id', isLoggedIn, messagesCtrl.reply);
router.delete('/:messageId/:replyId', isLoggedIn, messagesCtrl.delete);

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) return next();
	res.redirect('/auth/google');
}

module.exports = router;
