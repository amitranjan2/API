const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  postname: {
    type: String,
    required: true,
    trim: true,
  },
  title:{
    type:String
  },
  photo:{
    type:String
  },

}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
