import { GET_DETAILS, SET_DETAILS, ERROR } from './constants';

export const initialState = {
  loading: false,
  error: false,
  details: false,
};

const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAILS:
      return {
        ...state,
        loading: true
      };
    case SET_DETAILS:
      return {
        ...state,
        loading: false,
        details: action.details
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

export default detailsReducer;

