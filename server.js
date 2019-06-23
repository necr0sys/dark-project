const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const bodyParser = require('body-parser');
const uuidv1 = require('uuid/v1');

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


app
  .prepare()
  .then(() => {
    const server = express();
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));
    server.get('/p/:id', (req, res) => {
      const actualPage = '/post';
      console.log(req.params.id);
      const queryParams = { title: req.params.id };
      app.render(req, res, actualPage, queryParams);
    });
    server.get('*', (req, res) => {
      return handle(req, res)
    });
    server.post('/login', (req, res) => {
      const data = req.body;
      const checkMail = users.find((user) => {
        return user.mail === data.mail;
      })
      setTimeout(() => {
        if (checkMail) {
          res.status(501).send(data.mail);
        } else {
          res.status(200).send(data.mail);
        }
      },3000)
    })
    server.listen(3000, err => {
      if (err) throw err;
      console.log('Server listen in port 3000');
    });
  })
  .catch(ex => {
    console.log(ex.stack);
    process.exit(1);
  });
