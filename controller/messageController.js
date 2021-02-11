const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const Message = require('../model/messageModel');

exports.sendOTP = async (req, res, next) => {
  try {
    const otp = Math.trunc(Math.random() * 1000000);
    const message = await client.messages.create({
      body: `Hi. Your OTP is: ${otp}. Valid for 10 mins`,
      from: '+14243390179',
      to: '+919834935716',
    });
    const newMessage = await Message.create({
      user: '6023931e86b8bdcce663a835' || req.body.userId,
      otp: otp,
      smsTime: Date.now(),
    });
    res.status(201).json({
      status: 'success',
      message: 'message sent successfully',
      data: {
        message,
        newMessage,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

// exports.createMessage = async (req, res, next) => {
//   const message = await Message.create(req.body);
//   res.status(201).json({
//     status: 'success',
//     data: {
//       message,
//     },
//   });
// };

exports.getAllMessages = async (req, res, next) => {
  try {
    const query = Message.find();
    query.sort('-smsTime');

    const messages = await query;

    res.status(200).json({
      status: 'success',
      data: {
        messages,
      },
    });
  } catch (err) {
    console.log(err);
  }
};
