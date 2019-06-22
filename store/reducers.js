import { combineReducers } from 'redux';
import {ON_REGISTER } from './actions';

export const initialState = {
  registro: false,
}

const registro = (state = initialState.registro, action) => {
  if (action.type === ON_REGISTER) {
    return true;
  }
  return state;
};

export const greenlink = combineReducers({
  registro,
});