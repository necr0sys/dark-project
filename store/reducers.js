import { combineReducers } from 'redux';
import {ON_REGISTER, ON_LOGIN, ON_NAV } from './actions';

export const initialState = {
  nav: false,
  registro: false,
  login: false,
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

export const greenlink = combineReducers({
  registro,
  login,
  nav,
});