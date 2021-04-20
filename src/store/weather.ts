import { IAction, SET_WEATHER_3D, SET_WEATHER_NOW } from './constants'
export interface IWeatherNow {
  temp?: string //温度
  feelsLike?: string //体感温度
  icon?: string //图标编号
  text?: string //天气文字
  wind360?: string //180
  windDir?: string //南风
  windScale?: string //2
  windSpeed?: string //9
  humidity?: string //41
  precip?: string //0.0
  pressure?: string //1025
  vis?: string //23
  cloud?: string //91
}

export interface IWeatherDaily {
  fxDate?: string
  sunrise?: string
  sunset?: string
  moonrise?: string
  moonset?: string
  moonPhase?: string
  tempMax?: string
  tempMin?: string
  iconDay?: string
  textDay?: string
  iconNight?: string
  textNight?: string
  humidity?: string
}

export interface IWeatherState {
  now: IWeatherNow
  daily3: Array<IWeatherDaily>
}

const initState: IWeatherState = {
  now: {},
  daily3: []
}

export default function (state: IWeatherState = initState, action: IAction = {}) {
  switch(action.type) {
    case SET_WEATHER_NOW:
      console.log(action)
      state.now = action.payload || {}
      return {...state}
    case SET_WEATHER_3D:
      state.daily3 = action.payload || []
      return {...state}
    default:
      return state
  }
}
