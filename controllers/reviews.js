const Album = require('../models/album');

module.exports = {
	create,
};

// ICEBOX I ended up cutting reviews from the UI for now, will update this function and adjust accordingly
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
