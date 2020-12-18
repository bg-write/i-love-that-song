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

// "You're trying to find a message by the ID, but what you really want to be finding is a reply ... check the function to do this from flights lab"
function deleteReply(req, res) {
	console.log(req.params);
	Message.findById(req.params.messageId)
		.then((message) => {
			const idx = message.replies.findIndex(
				(reply) => reply._id == req.params.replyId
			);
			message.replies.splice(idx, 1);
			message.save().then(() => {
				res.redirect(`/messages/${message._id}`);
			});
		})
		.catch((err) => {
			console.log(err);
		});
}
