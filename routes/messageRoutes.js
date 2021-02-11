const express = require('express');

const messageController = require('../controller/messageController');

const router = express.Router();

router.route('/').get(messageController.getAllMessages);

router.post('/sendOTP', messageController.sendOTP);

module.exports = router;
