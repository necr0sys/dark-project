const uuid = require('uuid/v1');

class NewUser{
  constructor(data){
    this.id = uuid();
    this.mail = data.mail;
    this.pass = data.pass;
    this.name = data.name;
    this.lastName = data.lastName;
    this.birthday = data.birthday;
    this.genre = data.genre;
    this.perfilImg = '';
    this.frontPageImg = '';
    this.frontPageQuote = '';
    this.greencoins = 5000;
    this.posts = [];
    this.friends = [];
    this.gifts = [];

  }

  get fullName() {
    return this.makeNames();
  }

  makeNames () {
    return `${this.name} ${this.lastName}`;
  }
};

module.exports = NewUser;
