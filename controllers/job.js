exports.get_index = (req, res, next) => {
	res.status('200');
	res.render('job_index',);
};

exports.enter_job = (req, res, next) => {
	res.status('200');
	res.render('enter_job',);
};

exports.submit_job = (req, res, next) => {
var models = require("../models");
		models.client.create({
			invoice: req.body.invoice_id,
			client_id: req.body.client_id,
			job_type: req.body.job_type,
			equipment_disposition_type: req.body.equipment_disposition_type,
			date: req.body.date,
			vehicle: req.body.vehicle,
			driver: req.body.driver,
			driver_notes: req.body.driver_notes,
			driver_equipment: req.body.driver_equipment,
			expected_materials: req.body.expected_materials,
			dd_type: req.body.dd_type,
			dd_quantity: req.body.dd_quantity,
			dd_notes: req.body.dd_notes,
			weight: req.body.weight,
			actual_materials: req.body.actual_materials,
			status: req.body.status,
			entered_by: 'erik',
			edited_by: 'erik'
			});
		res.render('index');
};