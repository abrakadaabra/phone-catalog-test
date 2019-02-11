/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectCatalog = state => {
  return state.catalog || initialState;
};
const makeSelectLoading = () => createSelector(selectCatalog, catalogState => catalogState.loading);
const makeSelectError = () => createSelector(selectCatalog, catalogState => catalogState.error);
const makeSelectItems = () => createSelector(selectCatalog, catalogState => catalogState.items);

export {
  selectCatalog,
  makeSelectLoading,
  makeSelectError,
  makeSelectItems,
};
