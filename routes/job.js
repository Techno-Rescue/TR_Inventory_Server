const express = require('express');
const router = express.Router();

const jobController = require('../controllers/job');

router.use(express.static('public'));
router.get('/',jobController.get_index);
router.get('/add', jobController.enter_job);
router.post('/add', jobController.submit_job);
//router.get('/view', jobController.view_jobs);
//router.get('/view/:jobId', jobController.view_job);
//router.post('/view/:jobId', jobController.view_job);

module.exports = router;