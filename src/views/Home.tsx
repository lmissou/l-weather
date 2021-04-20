/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { FETCH_WEATHER_3D, FETCH_WEATHER_NOW, IState } from '../store/constants'
import { IWeatherDaily, IWeatherNow } from '../store/weather'
import { imgBasePath } from '../constant'
import { dateToDay } from '../utils'
import { ICity } from '../store/city'

export default function Home () {
  const homeCss = css`
    --main-font-size: 18px;

    width: 100%;
    height: 100%;
    font-size: var(--main-font-size);
    .weather-city {
        height: 10%;
        text-align: center;
    }
    .weather-main {
        width: 100%;
        height: 60%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .weather-temp {
        height: 100px;
    }
    .weather-temp span:first-of-type {
        font-size: 70px;
    }
    .weather-temp span:nth-of-type(2) {
        font-size: 14px;
        vertical-align: top;
    }
    .weather-text {
        color: var(--primary-color);
        width: 150px;
        height: 100px;
        text-align: center;
    }
    .weather-img {
        height: var(--main-font-size);
        vertical-align: middle;
    }

    .weather-3day {
        height: 30%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .weather-daily {
        height: 33%;
    }
    .weather-daily img {
        width: var(--main-font-size);
    }
    .weather-daily--bar {
        display: inline-block;
        width: 120px;
        height: 6px;
        margin: 0 14px;
        border-radius: 5px;
        background-image: linear-gradient(to right, red, blue);
    }
`
  const dispatch = useDispatch()
  const curCity: ICity = useSelector((state: IState) => state.city.city)
  const weatherNow: IWeatherNow = useSelector((state: IState) => state.weather.now)
  const weather3d: Array<IWeatherDaily> = useSelector((state: IState) => state.weather.daily3)
  const handleClick = () => {
    dispatch({type: FETCH_WEATHER_NOW})
    dispatch({type: FETCH_WEATHER_3D})
  }
  useEffect(() => {
    dispatch({type: FETCH_WEATHER_NOW})
    dispatch({type: FETCH_WEATHER_3D})
  }, [])
  
  return (
    <div css={homeCss}>
      <div className='weather-header'>
        <Link to='/citylist'>Setting</Link>
        <span className='weather-city'>{curCity.name} - {curCity.adm2},{curCity.adm1}</span>
      </div>
      <div className='weather-main'>
        <div className='weather-temp' onClick={handleClick}>
          <span>{weatherNow.temp}</span>
          <span> &#176;C </span>
        </div>
        <div className='weather-text'>
          {weatherNow.text}
          <img className='weather-img' src={imgBasePath + weatherNow.icon + '.png'}/>
        </div>
      </div>
      <div className='weather-3day'>
        {weather3d.map((weatherd: IWeatherDaily) => (<div key={weatherd.fxDate} className='weather-daily'>
          <span>{dateToDay(weatherd.fxDate || "")} </span>
          <span> {weatherd.humidity} </span>
          <img src={imgBasePath + weatherd.iconDay + '.png'} />
          <span> {weatherd.tempMax}&#176;</span>
          <span className='weather-daily--bar'> </span>
          <span>{weatherd.tempMin}&#176; </span>
          <img src={imgBasePath + weatherd.iconNight + '.png'} />
        </div>))}
      </div>
    </div>
  )
}
