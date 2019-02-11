import { call, put, takeLatest, delay } from 'redux-saga/effects';
import { catalogService } from 'services';
import head from 'lodash/head';
import { GET_DETAILS } from './constants';
import { setDetails, error as errorAction } from './actions';

const normalize = (item) => {
  const details = head(item.details);
  return details ? {...item, characteristics: details.characteristics} : item;
}

export function* getPhone({id}) {
  if(!id) {
    return;
  }
  const { response, error } = yield call(catalogService.getPhone, id);
  if(response) {
      yield delay(500); // TODO just for see loading
      yield put(setDetails(normalize(response)));
  } else if(error) {
    yield put(errorAction(error.message));
  }
}

export default function* details() {
  yield takeLatest(GET_DETAILS, getPhone);
}
