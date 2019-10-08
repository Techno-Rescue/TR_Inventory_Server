const express = require('express');
const router = express.Router();

const contactController = require('../controllers/contact');

router.use(express.static('public'));
router.post('/', contactController.enter_contact);
router.post('/add', contactController.add_contact);

module.exports = router;