const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
  otp: {
    type: Number,
    unique: true,
  },
  smsTime: {
    type: Date,
    default: Date.now(),
  },
});

messageSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'user',
    select: 'name',
  });
  next();
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
