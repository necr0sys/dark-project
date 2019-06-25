const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');
const uuid = require('uuid/v1');
const bodyParser = require('body-parser');
const NewUser = require('../utils/new-user');

const app = express();

app.use(helmet());
app.use(cors());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const users = [
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
];

app.post('*', (req, res) => {
  const data = req.body;
  const checkMail = users.find((user) => {
    return user.mail === data.mail;
  })
  if (checkMail) {
    res.status(501).send(data.mail);
  } else {
    res.status(200).send(data.mail);
  }
});

module.exports = app;
