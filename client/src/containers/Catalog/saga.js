import { call, put, takeLatest, delay } from 'redux-saga/effects';
import { catalogService } from 'services'
import { GET_PHONES } from './constants';
import { setPhones, error as errorAction } from './actions';

export function* getPhones() {

  const { response, error } = yield call(catalogService.getPhones);

  if(response) {
      yield delay(500); // TODO just for see loading
      yield put(setPhones(response));
  } else if(error) {
    yield put(errorAction(error.message));
  }
}

export default function* catalog() {
  yield takeLatest(GET_PHONES, getPhones);
}
