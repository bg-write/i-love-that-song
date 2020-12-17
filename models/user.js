const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listenListSchema = new Schema(
	{
		title: String,
		released: Date,
	},
	{
		timestamps: true,
	}
);

const userSchema = new Schema(
	{
		name: String,
		alias: String,
		email: String,
		avatar: String,
		googleId: String,
		bio: String,
		friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],
		listenList: [listenListSchema],
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('User', userSchema);
