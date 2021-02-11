const mongoose = require('mongoose');
const slugify = require('slugify');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A user must have a name'],
    trim: true,
  },
  slug: String,
  number: {
    type: Number,
    required: [true, 'A user must have a number'],
    unique: [true, 'number need to be unique'],
  },
});
userSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
