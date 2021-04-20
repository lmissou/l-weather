import { ICityState } from "./city"
import { IWeatherNow, IWeatherState } from "./weather"

export interface IAction {
  type?: string,
  payload?: any
}

export interface IState {
  city: ICityState
  weather: IWeatherState
}

export interface IResponse {
  data: any
}

// city
export const SET_CITYLIST = 'SET_CITYLIST'
export const SET_STAR_CITYLIST = 'SET_STAR_CITYLIST'
export const SET_CUR_CITY = 'SET_CUR_CITY'
// city saga
export const FETCH_CITY = 'FETCH_CITY'

// weather
export const SET_WEATHER_NOW = 'SET_WEATHER_NOW'
export const SET_WEATHER_3D = 'SET_WEATHER_3D'
// weather saga
export const FETCH_WEATHER_NOW = 'FETCH_WEATHER_NOW'
export const FETCH_WEATHER_3D = 'FETCH_WEATHER_3D'
