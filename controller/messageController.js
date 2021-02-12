const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
// eslint-disable-next-line import/order
const client = require('twilio')(accountSid, authToken);

const User = require('../model/userModel');
const Message = require('../model/messageModel');

exports.generateOTP = (req, res, next) => {
  const otp = Math.trunc(Math.random() * 1000000);
  req.otp = otp;
  next();
};

exports.sendOTP = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.body.userId);
  const message = await client.messages.create({
    body: `Hi. Your OTP is: ${req.body.otp}. Valid for 10 mins`,
    from: '+14243390179',
    to: `+${user.number}`,
  });
  if (!user || !message) {
    return next(new AppError('no user is there with that id or message not sent', 404));
  }

  const newMessage = await Message.create({
    user: user._id,
    otp: req.body.otp,
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
});

exports.getAllMessages = catchAsync(async (req, res, next) => {
  const query = Message.find();
  query.sort('-smsTime');

  const messages = await query;

  req.messages = messages;
  if (!messages) {
    return next(new AppError('no messages found', 404));
  }
  next();
});
