const express = require('express');
const router = express.Router();

const indexController = require('../controllers/index');

router.use(express.static('public'));
router.get('/', indexController.get_index);

module.exports = router;