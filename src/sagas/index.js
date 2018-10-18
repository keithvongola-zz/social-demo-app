import { all } from 'redux-saga/effects';
import data from '../reducers/data';

export default function* rootSaga() {
  yield all([
    data,
  ]);
}
