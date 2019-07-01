import { combineReducers } from 'redux';
import {ON_REGISTER, ON_LOGIN, ON_NAV, ON_USER_REGISTER } from './actions';

export const initialState = {
  nav: false,
  registro: false,
  login: false,
  user:[
    {
      id: 'greenqueen',
      mail: 'admin@mail.com',
      pass: '123456',
      name: 'sophie',
      lastName: 'green',
      birthday: '01/07/2019',
      genre: 'mujer',
      perfilImg: '/static/queengreen.jpg',
      frontPageImg: '/static/queenfront.jpg',
      frontPageQuote: 'comparte con los tuyos en green link',
      greencoins: 5000,
      posts: [],
      friends: [],
      gifts: [],
    }
  ],
}

const nav = (state = initialState.nav, action) => {
  if (action.type === ON_NAV) {
    return !state;
  }
  return state;
}

const registro = (state = initialState.registro, action) => {
  if (action.type === ON_REGISTER) {
    return true;
  }
  return state;
};

const login = (state = initialState.login, action) => {
  if (action.type === ON_LOGIN) {
    return action.option;
  }
  return state;
}

const user = (state = initialState.user, action) => {
  switch (action) {
    case ON_USER_REGISTER: 
      return [...state, action.user];
    default:
      return state;
  }
}

export const greenlink = combineReducers({
  registro,
  login,
  nav,
});