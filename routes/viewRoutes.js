const express = require('express');
const viewController = require('../controller/viewController');
const messageController = require('../controller/messageController');

const router = express.Router();

router.route('/').get(messageController.getAllMessages, viewController.getOverview);
router.route('/:slug/contactInfo').get(viewController.ContactInfo);
router.route('/:slug/contactInfo/sendMessage').get(messageController.generateOTP, viewController.sendMessage);

module.exports = router;
