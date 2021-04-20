import { call, put, takeLatest } from 'redux-saga/effects'
import http from 'axios'

import { IAction, FETCH_CITY, SET_CITYLIST, IResponse } from '../constants'

function* fetchCity(action: IAction) {
  const resp: IResponse = yield call(http.get, 'https://geoapi.qweather.com/v2/city/lookup', {params: {
    location: action.payload,
    key: '6527b8cfcbdf48b8909b4ced61a33971'
  }})
  yield put({type: SET_CITYLIST, payload: resp.data.location || []})
}

export default function* () {
  yield takeLatest(FETCH_CITY, fetchCity)
}
