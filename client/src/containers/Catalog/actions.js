import { GET_PHONES, SET_PHONES, ERROR } from './constants';

export function getPhones() {
  return {
    type: GET_PHONES,
  };
}

export function setPhones(items) {
  return {
    type: SET_PHONES,
    items,
  };
}

export function error(error) {
  return {
    type: ERROR,
    error,
  };
}
