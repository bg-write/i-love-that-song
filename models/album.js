const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
	{
		reviewer: String,
		reviewerPhoto: String,
		content: String,
	},
	{
		timestamps: true,
	}
);

const albumSchema = new Schema(
	{
		title: String,
		id: String,
		year: String,
		cover_image: String,
		resource_url: String,

		favoritedBy: [{ type: Schema.Types.ObjectId, ref: 'User' }],
		reviews: [reviewSchema],
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('Album', albumSchema);
