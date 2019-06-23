export const ON_NAV = 'ON_NAV';
export const ON_REGISTER = 'ON_REGISTER';
export const ON_LOGIN = 'ON_LOGIN';

export const onNav = () => ({ type: ON_NAV, });
export const onRegister = () => ({ type: ON_REGISTER });
export const onLogin = option => ({ type: ON_LOGIN, option });
