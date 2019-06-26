const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  mail: { type: String, required: true, max: 100  },
  pass: { type: String, required: true, max: 100 },
  name: { type: String, /*required: true,*/ max: 100 },
  lastName: { type: String, /*required: true,*/ max: 100 },
  birthday: Date,
  genre: String,
  perfilImg: String,
  frontPageImg: String,
  frontPageQuote: String,
  greencoins: Number,
  posts: Array,
  friends: Array,
  gifts: Array,
});

UserSchema
  .virtual('url')
  .get(() => "/perfil/" + this._id);

module.exports = mongoose.model('User', UserSchema);