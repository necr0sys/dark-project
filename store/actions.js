export const ON_NAV = 'ON_NAV';
export const ON_REGISTER = 'ON_REGISTER';
export const ON_LOGIN = 'ON_LOGIN';
export const ON_USER_REGISTER = 'ON_USER_REGISTER';

export const onNav = () => ({ type: ON_NAV, });
export const onRegister = () => ({ type: ON_REGISTER });
export const onLogin = option => ({ type: ON_LOGIN, option });
export const  onUserRegister = user => ({ type: ON_USER_REGISTER, user });
