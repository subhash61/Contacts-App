const User = require('../model/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getOverview = catchAsync(async (req, res, next) => {
  const users = await User.find();
  if (!users) {
    return next(new AppError('no users data found', 404));
  }
  res.status(200).render('overview', {
    title: 'Contacts ',
    users,
    messages: req.messages,
  });
});

exports.ContactInfo = catchAsync(async (req, res, next) => {
  const user = await User.findOne({ slug: req.params.slug });
  res.status(200).render('contactInfo', {
    title: 'Contact Info',
    user,
  });
  if (!user) {
    return next(new AppError('no user found', 404));
  }
});

exports.sendMessage = catchAsync(async (req, res, next) => {
  const user = await User.findOne({ slug: req.params.slug });
  if (!user) {
    return next(new AppError('no user found ', 404));
  }
  res.status(200).render('sendMessage', {
    title: 'Send Message',
    user,
    otp: req.otp,
    // message,
  });
});
