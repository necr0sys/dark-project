const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  mail: { type: String, required: true, max: 100  },
  pass: { type: String, required: true, max: 100 },
  name: { type: String, required: true, max: 100 },
  lastName: { type: String, required: true, max: 100 },
  birthday: String,
  genre: { type: String, default: 'Indefinido' },
  perfilImg: { type: String, default: '/static/queengreen.jpg' },
  frontPageImg: { type: String, default: '/static/queenfront.jpg' },
  frontPageQuote: { type: String, default: '"crear un mundo mas limpio es nuestro deber, nuestro derecho es disfrutarlo! compartiendo... con los seres que amamos"' },
  greencoins: { type: Number, default: 5000 },
  posts: Array,
  friends: Array,
  gifts: { type: Number, default: 10 },
  comments: { type: Number, default: 5 }
});

UserSchema
  .virtual('url')
  .get(() => "/perfil/" + this._id);

module.exports = mongoose.model('User', UserSchema);