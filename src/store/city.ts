import { IAction, SET_CITYLIST, SET_STAR_CITYLIST, SET_CUR_CITY } from './constants'

export interface ICity {
  adm1?: string// "湖北省"
  adm2?: string// "武汉"
  country?: string// "中国"
  fxLink?: string// "http://hfx.link/3bv1"
  id?: string// "101200101"
  isDst?: string// "0"
  lat?: string// "30.58435"
  lon?: string// "114.29856"
  name?: string// "武汉"
  rank?: string// "11"
  type?: string// "city"
  tz?: string// "Asia/Shanghai"
  utcOffset?: string// "+08:00"
}

export interface ICityState {
  cityList: ICity[]
  starCityList: ICity[]
  city: ICity
}

const initState: ICityState = {
  cityList: [],
  starCityList: [],
  city: {}
}

export default function (state: ICityState = initState, action: IAction = {}) {
  switch(action.type) {
    case SET_CITYLIST:
      state.cityList = action.payload
      return {...state}
    case SET_STAR_CITYLIST:
      state.starCityList = action.payload
      return {...state}
    case SET_CUR_CITY:
      state.city = action.payload
      return {...state}
    default:
      return state
  }
}
