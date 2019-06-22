import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { initialState as myInitialState, greenlink } from './reducers';

/*const myInitialState = {
  registro: false,
  nav: false,
}

const ON_NAV_OPEN = 'ON_NAV_OPEN';

const reducer = (state = myInitialState, action) => {
  if (action.type === ON_NAV_OPEN) {
    return Object.assign({}, state, {nav: !state.nav});
  }
  return state;
};

export const onNavOpen = () => {
  return {type: ON_NAV_OPEN}
}*/

export const initializeStore = (initialState = myInitialState) => {
  return createStore(
    greenlink,
    initialState,
    composeWithDevTools(applyMiddleware())
  )
};
