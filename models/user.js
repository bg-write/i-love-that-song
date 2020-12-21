const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// ICEBOX comb through updated listenListSchema and take out any keys that are not being used after updating the listen collection function.
const listenListSchema = new Schema(
	{
		title: String,
		year: String,
		id: String,
		cover_image: String,
		resource_url: String
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
