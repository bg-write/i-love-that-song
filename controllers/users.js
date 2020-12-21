const User = require('../models/user');
const Album = require('../models/album');

module.exports = {
	index,
	showProfile,
	update,
	show,
	addFriend,
	removeFriend,
};

function index(req, res) {
	User.find({})
		.then((users) => {
			res.render('users/index', { title: 'User List', user: req.user, users });
		})
		.catch((err) => {
			console.log(err);
		});
}

function showProfile(req, res) {
	User.findById(req.user._id)
		.populate('friends')
		.then((user) => {
			res.render('users/profile', { title: 'Profile Page', user });
		})
		.catch((err) => {
			console.log(err);
		});
}

function update(req, res) {
	User.findByIdAndUpdate(req.user._id, req.body, { new: true })
		.then(() => {
			res.redirect('/users/profile');
		})
		.catch((err) => {
			console.log(err);
		});
}

function show(req, res) {
	User.findById(req.params.id)
		.then((userInfo) => {
			Album.find({ favoritedBy: userInfo._id }).then((albums) => {
				res.render('users/show', {
					title: 'User Details',
					userInfo,
					user: req.user,
					albums,
				});
			});
		})
		.catch((err) => {
			console.log(err);
		});
}

// ICEBOX: Render a "Friend List"; V1 incorporates this logic yet does not display on the screen.
function addFriend(req, res) {
	req.user.friends.push(req.params.id);
	req.user
		.save()
		.then(() => {
			res.redirect(`/users/${req.params.id}`);
		})
		.catch((err) => {
			console.log(err);
		});
}

// ICEBOX: Render a "Friend List"; V1 incorporates this logic yet does not display on the screen.
function removeFriend(req, res) {
	let idx = req.user.friends.indexOf(req.params.id);
	req.user.friends.splice(idx, 1);
	req.user
		.save()
		.then(() => {
			res.redirect(`/users/${req.params.id}`);
		})
		.catch((err) => {
			console.log(err);
		});
}
