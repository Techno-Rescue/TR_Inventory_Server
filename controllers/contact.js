exports.enter_contact = (req, res, next) => {
var models = require("../models");
	models.settings.findAll({where: {type: 'contact_type'}}).then(function(enterContact) {
		res.status('200');
		res.render('enter_contact', {clientId: req.body.id, settings1: enterContact});
	});
};

exports.add_contact = (req, res, next) => {
var models = require("../models");
		models.contact.create({
			client_id: req.body.id,
			contact_type: req.body.type,
			name: req.body.name,
			address: req.body.address,
			city: req.body.city,
			state: req.body.state,
			zip: req.body.zip,
			phone: req.body.phone,
			email: req.body.email,
			instructions: req.body.instructions,
			entered_by: 'erik',
			edited_by: 'erik'
			});
		res.render('index');
};