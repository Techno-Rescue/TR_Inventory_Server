var client_id;
exports.get_index = (req, res, next) => {
	req.session.client_id = "test";
	console.log(req.session.client_id);
	res.status('200');
	res.render('index',);
};