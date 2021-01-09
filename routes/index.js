const router = require('express').Router();

router.get('/', function (req, res, next) {
	res.render('index', {
		title: 'I Love That Song',
		user: req.user ? req.user : null,
	});
});

module.exports = router;
