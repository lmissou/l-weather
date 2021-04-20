import { all } from 'redux-saga/effects';

import citySaga from './city';
import weatherSaga from './weather';

export default function* rootSaga() {
  yield all([ // 同时并发多个
    citySaga(),
    weatherSaga()
  ])
}
