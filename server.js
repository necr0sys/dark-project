const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const bodyParser = require('body-parser');
const NewUser = require('./utils/new-user');
const uuidv1 = require('uuid/v1');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const UserSchema = require('./models/user');
dotenv.config();

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
    perfilImg: '/static/felix.jpg',
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


app
  .prepare()
  .then(() => {
    const server = express();
    server.use(bodyParser.json({ limit: "16mb", extended: true }));
    server.use(bodyParser.urlencoded({ limit: "16mb", extended: true }));

    const mongoDB = process.env.URI_DB;
    mongoose.connect(mongoDB, { useFindAndModify: false });
    mongoose.Promise = global.Promise;
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Error la conexion a la base de datos fallo'));

    server.post('/foo', (req, res) => {
      const id = '5d12c8f8c2e0767a295b2abd';
      const { img } = req.body;
      UserSchema.findByIdAndUpdate(id, { perfilImg: img }, (err, info) => {
        if (err) console.error(err);
        console.log(info);
      });
      res.status(200).send(img);
    })
    server.post('/api/registro', (req, res) => {
      const data = req.body;
      const checkMail = users.find((user) => {
        return user.mail === data.mail;
      })
      console.log(checkMail);
      setTimeout(() => {
        if (checkMail) {
          res.status(501).send(checkMail.mail);
        } else {
          user = new NewUser(data);
          users.push(user);
          res.status(200).send(user.fullName);
        }
      },3000)
    });
    server.post('/api/login', (req, res) => {
      const data = req.body;
      const checkMail = users.find((user) => {
        return user.mail === data.mail && user.pass === data.pass;
      })
      setTimeout(() => {
        if (checkMail) {
          res.status(200).send(checkMail.id);
        } else {
          res.status(501).send();
        }
      },3000)
    });
    server.get('/api/perfil/:id', (req, res) => {
      user = users.find((user) => {
        return user.id === req.params.id;
      })
      res.status(200).json(user);
    })
    server.get('*', (req, res) => {
      return handle(req, res)
    });
    server.listen(3000, err => {
      if (err) throw err;
      console.log('Server listen in port 3000');
    });
  })
  .catch(ex => {
    console.log(ex.stack);
    process.exit(1);
  });
//"src": "/api/perfil/(?<id>[^/]*)", "dest": "/api/perfil.js?id=$id",