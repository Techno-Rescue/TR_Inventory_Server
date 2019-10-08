const express = require('express');
const router = express.Router();

const clientController = require('../controllers/client');

router.use(express.static('public'));
router.get('/',clientController.get_index);
router.get('/add', clientController.enter_client);
router.post('/add', clientController.submit_client);
router.get('/view', clientController.view_clients);
router.get('/view/:userId', clientController.view_client);
router.post('/view/:userId', clientController.view_client);

module.exports = router;