import { GET_PHONES, SET_PHONES, ERROR } from './constants';

export const initialState = {
  loading: false,
  error: false,
  items: false,
};

const catalogReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PHONES:
      return {
        ...state,
        loading: true
      };
    case SET_PHONES:
      return {
        ...state,
        loading: false,
        items: action.items
      }
    case ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    default:
      return state;
  }
};

export default catalogReducer;

