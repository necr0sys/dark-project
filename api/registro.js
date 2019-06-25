const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');
const bodyParser = require('body-parser');
//const NewUser = require('../utils/new-user');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const User = require('../models/user');

const app = express();

app.use(helmet());
app.use(cors());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
dotenv.config();

const mongoDB = process.env.URI_DB;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error la conexion a la base de datos fallo'));

/*const users = [
  {
    id: 'greenlink-default-user',
    mail: 'queen-green@gmail.com',
    pass: 'greenlink',
    name: 'sophie',
    lastName: 'green',
    birthday: '22/06/2019',
    genre: 'mujer',
    perfilImg: '/static/queengreen.jpg',
    frontPageImg: '/static/queenfront.jpg',
    frontPageQuote: '"crear un mundo mas limpio es nuestro deber, nuestro derecho es disfrutarlo! compartiendo... con los seres que amamos"',
    greencoins:5000,
    posts:[
      {
        id:'default',
        img:'/static/bg-card.jpg',
        likes:5,
        comments:[
          {
            userId: 'admin',
            id:'comment-1',
            comment:'me encanta esta inciativa',
          }
        ],
      }
    ],
    friends:['admin'],
    gifts:['fanta', 'snikers', 'oreo'],
  },
  {
    id: 'greenlink-default-user-felix',
    mail: 'felix@mail.com',
    pass: '123456',
    name: 'felix',
    lastName: 'tineo',
    birthday: '13/05/1986',
    genre: 'hombre',
    perfilImg: '/static/queengreen.jpg',
    frontPageImg: '/static/queenfront.jpg',
    frontPageQuote: '"crear un mundo mas limpio es nuestro deber, nuestro derecho es disfrutarlo! compartiendo... con los seres que amamos"',
    greencoins:5000,
    posts:[
      {
        id:'default',
        img:'/static/bg-card.jpg',
        likes:5,
        comments:[
          {
            userId: 'admin',
            id:'comment-1',
            comment:'me encanta esta inciativa',
          }
        ],
      }
    ],
    friends:['admin'],
    gifts:['fanta', 'snikers', 'oreo'],
  },
];*/

app.post('*', (req, res) => {
  const data = req.body;
  User.find({ mail: req.mail }, (err, user) => {
    if(err) return console.error(err);
    if (user) {
      res.status(501).send(data.mail);
    } else {
      const newUser = new User(data);
      newUser.save((err) => {
        if (err) return console.error(err);
        res.status(200).send(data.mail);
      })
    }
  })
  //const user = new User(data);

  /*const checkMail = users.find((user) => {
    return user.mail === data.mail;
  })
  if (checkMail) {
    res.status(501).send(checkMail.mail);
  } else {
    user = new NewUser(data);
    users.push(user);
    res.status(200).send(user.fullName);
  }*/
});

module.exports = app;
