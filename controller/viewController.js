const User = require('../model/userModel');

exports.getOverview = async (req, res, next) => {
  const users = await User.find();
  res.status(200).render('overview', {
    title: 'Contacts ',
    users,
  });
};
exports.ContactInfo = async (req, res, next) => {
  const user = await User.find();
  res.status(200).render('contactInfo', {
    title: 'Contact Info',
    user,
  });
};
exports.sendMessage = async (req, res, next) => {
  res.status(200).render('sendMessage', {
    title: 'Send Message',
  });
};
