import { GET_DETAILS, SET_DETAILS, ERROR } from './constants';

export function getDetails(id) {
  return {
    type: GET_DETAILS,
    id,
  };
}

export function setDetails(details) {
  return {
    type: SET_DETAILS,
    details,
  };
}

export function error(error) {
  return {
    type: ERROR,
    error,
  };
}
