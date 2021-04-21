/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { FETCH_WEATHER_3D, FETCH_WEATHER_NOW, IState } from '../../store/constants'
import { ICity } from '../../store/city'
import Main from './Main'
import Daily3 from './Daily3'
import Header from '../../compnents/Header'
import { useEffect } from 'react'
import { IWeatherDaily, IWeatherNow } from '../../store/weather'

export default function Home() {
    const homeCss = css`
    width: 100%;
    height: 100%;
    font-size: .04rem;
    z-index: 0;
    position: relative;
    background: url(https://pic4.zhimg.com/80/v2-d5fb43450e38fc351d70795495485d25_720w.jpg?source=1940ef5c) no-repeat fixed;
    ::after {
      content: "";
      z-index: -1;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: inherit;
      filter: blur(4px);
    }
  `
  const dispatch = useDispatch()
  const curCity: ICity = useSelector((state: IState) => state.city.city)
  const weatherNow: IWeatherNow = useSelector((state: IState) => state.weather.now)
  const weather3d: Array<IWeatherDaily> = useSelector((state: IState) => state.weather.daily3)
  const refreshWeather = () => {
    dispatch({ type: FETCH_WEATHER_NOW })
    dispatch({ type: FETCH_WEATHER_3D })
  }
  useEffect(refreshWeather, [])

  return (
    <div css={homeCss}>
      <Header>
        <div>
          <Link to='/citylist'>切换城市</Link>
        </div>
        <div>
          <span className='weather-city'>{curCity.name} - {curCity.adm2},{curCity.adm1}</span>
        </div>
        <div>
          <Link to='/citylist'>菜单</Link>
        </div>
      </Header>
      <Main handleClick={refreshWeather} weatherNow={weatherNow} />
      <Daily3 weather3d={weather3d} />
    </div>
  )
}
