const express = require('express');
const viewController = require('../controller/viewController');

const router = express.Router();

router.route('/').get(viewController.getOverview);
router.route('/contactInfo/:slug').get(viewController.ContactInfo);
router.route('/contactInfo/sendMessage').get(viewController.sendMessage);

module.exports = router;
