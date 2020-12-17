const Message = require('../models/message');

module.exports = {
	index,
	create,
	show,
	reply,
	delete: deleteReply,
};

function index(req, res) {
	Message.find({})
		.then((messages) => {
			res.render('messages/index', {
				title: 'Message Board',
				user: req.user,
				messages: messages.reverse(),
			});
		})
		.catch((err) => {
			console.log(err);
		});
}

function create(req, res) {
	req.body.postedBy = req.user.name;
	req.body.avatar = req.user.avatar;
	Message.create(req.body)
		.then(() => {
			res.redirect('/messages');
		})
		.catch((err) => {
			console.log(err);
		});
}

function show(req, res) {
	Message.findById(req.params.id)
		.then((message) => {
			res.render('messages/show', {
				title: 'Message Details',
				user: req.user,
				message,
			});
		})
		.catch((err) => {
			console.log(err);
		});
}

function reply(req, res) {
	Message.findById(req.params.id)
		.then((message) => {
			req.body.postedBy = req.user.name;
			req.body.avatar = req.user.avatar;
			message.replies.push(req.body);
			message.save().then(() => {
				res.redirect(`/messages/${req.params.id}`);
			});
		})
		.catch((err) => {
			console.log(err);
		});
}

function deleteReply(req, res) {
	Message.findByIdAndDelete(req.params.id)
		.then(() => {
			res.redirect('/messages');
		})
		.catch((err) => {
			console.log(err);
		});
}
