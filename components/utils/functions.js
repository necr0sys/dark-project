const RegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

export const detect = (id) => {
  const element = document.getElementById(id);
  const position = element.getBoundingClientRect();
  if (position.top >= 0 && (position.bottom - element.offsetHeight) + 100 <= window.innerHeight) {
    return true;
  }
  return false;
};

export const initialDetect = (id) => {
  const element = document.getElementById(id);
  const position = element.getBoundingClientRect();
  if (position.top >= 0 && (position.bottom - element.offsetHeight) <= window.innerHeight) {
    return true;
  }
  return false;
};

export const scrollToElement = (id) => {
  const position = document.getElementById(id).offsetTop;
  window.scrollTo(0, position - 70);
};

export const validateEmail = value => RegExp.test(value);
export const validateEmpty = value => value && true;
