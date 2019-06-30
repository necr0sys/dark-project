const app = require('./util/app');
const mongooseConnect = require('./util/mongoose');
const UserSchema = require('../models/user');

[...mongooseConnect];

app.post('*', async (req, res) => {
  const reqId = req.body.id;
  const reqAuthor = req.body.author;
  const reqDate = req.body.date;
  const reqImg = req.body.imgUrl;
  const reqhistory = req.body.history;
  const newPost = {
    author: reqAuthor,
    date: reqDate,
    imgUrl:  reqImg,
    history: reqhistory,
  };

  const resp = await UserSchema.findByIdAndUpdate(reqId, { $push: { posts: newPost } });
  if (resp) {
    res.status(200).send("todo bien");
  } else {
    res.status(501).send("todo mal");
  }
});

module.exports = app;
