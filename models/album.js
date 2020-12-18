const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
	{
		reviewer: String,
		reviewerPhoto: String,
		rating: { type: Number, min: 1, max: 10 },
		content: String,
	},
	{
		timestamps: true,
	}
);

const albumSchema = new Schema(
	{
		title: String,
		genre: String,
		genres: String,
		style: String,
		styles: String,
		id: String,
		year: String,
		cover_image: String,
		resource_url: String,
		releases_url: String,
		master_id: String,
		master_url: String,
		uri: String,
		thumb: String,
		label: String,
		labels: String,
		tracklist: String,
		artists: String,
		notes: String,
		videos: String,
		extraartists: String,
		released: String,
		country: String,
		artists_sort: String,
		members: String,
		aliases: String,
		namevariations: String,
		urls: String,
		profile: String,
		name: String,
		favoritedBy: [{ type: Schema.Types.ObjectId, ref: 'User' }],
		reviews: [reviewSchema],
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('Album', albumSchema);
