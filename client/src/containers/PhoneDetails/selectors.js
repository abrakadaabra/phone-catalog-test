/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectDetails = state => {
  return state.details || initialState;
};
const makeSelectLoading = () => createSelector(selectDetails, detailsState => detailsState.loading);
const makeSelectError = () => createSelector(selectDetails, detailsState => detailsState.error);
const makeSelectDetails = () => createSelector(selectDetails, detailsState => detailsState.details);

export {
  selectDetails,
  makeSelectLoading,
  makeSelectError,
  makeSelectDetails,
};
