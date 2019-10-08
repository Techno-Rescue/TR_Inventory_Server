exports.get_index = (req, res, next) => {
	res.status('200');
	res.render('client_index',);
};

exports.enter_client = (req, res, next) => {
	res.status('200');
	res.render('enter_client',);
};

exports.view_clients = (req, res, next) => {
var models = require("../models");
	models.client.findAll().then(function(viewClients) {
	res.status('200');
	console.log(viewClients);
	res.render('view_clients',{
	clients: viewClients
	});
		});
};

exports.view_client = (req, res, next) => {
var models = require("../models");
	models.client.findOne({include: [models.contact, models.job], where: {client_id: req.body.clientId}}).then(function(viewClient) {
	res.status('200');
	console.log(viewClient);
	res.render('view_client',{client: viewClient});
		});
};

exports.view_contact = (req, res, next) => {
var models = require("../models");
	models.contact.findAll({where: {client_id: req.body.contactId}}).then(function(viewContact) {
	res.status('200');
	console.log(viewContact);
	res.render('view_contact',{client: viewContact});
		});
};

exports.submit_client = (req, res, next) => {
var models = require("../models");
		models.client.create({
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