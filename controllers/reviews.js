const Album = require('../models/album');

module.exports = {
	create,
};

function create(req, res) {
	Album.findById(req.params.id).then((album) => {
		album.reviews.push(req.body);
		album
			.save()
			.then(() => {
				res.redirect(`/albums/${album.id}`);
			})
			.catch((err) => {
				console.log(err);
			});
	});
}
