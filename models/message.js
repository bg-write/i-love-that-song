const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const replySchema = new Schema(
	{
		postedBy: String,
		avatar: String,
		message: String,
	},
	{
		timestamps: true,
	}
);

const messageSchema = new Schema(
	{
		postedBy: String,
		avatar: String,
		title: String,
		replies: [replySchema],
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('Message', messageSchema);
