import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { initialState as myInitialState, greenlink } from './reducers';

export const initializeStore = (initialState = myInitialState) => {
  return createStore(
    greenlink,
    initialState,
    composeWithDevTools(applyMiddleware())
  )
};
