const app = require('./util/app');
const mongooseConnect = require('./util/mongoose');
const UserSchema = require('../models/user');

[...mongooseConnect];

app.post('*', async (req, res) => {
  const reqId = req.body.id;
  const newPost = req.body.newPost;
  const resp = await UserSchema.findByIdAndUpdate(reqId, { $push: { posts: newPost, $position: 0 } });
  if (resp) {
    res.status(200).send();
  } else {
    res.status(501).send();
  }
});

module.exports = app;
