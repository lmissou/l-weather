import { select, call, put, takeLatest } from 'redux-saga/effects'
import http from 'axios'

import { IResponse, FETCH_WEATHER_NOW, SET_WEATHER_NOW, FETCH_WEATHER_3D, SET_WEATHER_3D, IState } from '../constants'
import { ICity } from '../city'

function* fetchWeatherNow() {
  const city: ICity = yield select((state: IState) => state.city.city)
  const resp: IResponse = yield call(http.get, 'https://devapi.qweather.com/v7/weather/now', {params: {
    location: city.id,
    key: '6527b8cfcbdf48b8909b4ced61a33971'
  }})
  yield put({type: SET_WEATHER_NOW, payload: resp.data.now})
}

function* fetchWeather3d() {
  const city: ICity = yield select((state: IState) => state.city.city)
  const resp: IResponse = yield call(http.get, 'https://devapi.qweather.com/v7/weather/3d', {params: {
    location: city.id,
    key: '6527b8cfcbdf48b8909b4ced61a33971'
  }})
  yield put({type: SET_WEATHER_3D, payload: resp.data.daily})
}

export default function* () {
  yield takeLatest(FETCH_WEATHER_NOW, fetchWeatherNow)
  yield takeLatest(FETCH_WEATHER_3D, fetchWeather3d)
}
