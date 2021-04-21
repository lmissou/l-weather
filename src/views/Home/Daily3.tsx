/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { ReactElement, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { imgBasePath } from '../../constant'
import { FETCH_WEATHER_3D, IState } from '../../store/constants'
import { IWeatherDaily } from '../../store/weather'
import { dateToDay } from '../../utils'

export default function Daily3 (): ReactElement {
  const mainCss = css`
    width: 100%;
    height: 24%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    .weather-daily {
      height: .1rem;
    }
    .weather-daily img {
      width: .04rem;
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
  const weather3d: Array<IWeatherDaily> = useSelector((state: IState) => state.weather.daily3)
  useEffect(() => {
    dispatch({ type: FETCH_WEATHER_3D })
  }, [])
  return (
    <div css={mainCss}>
      {weather3d.map((weatherd: IWeatherDaily) => (<div key={weatherd.fxDate} className='weather-daily'>
        <span>{dateToDay(weatherd.fxDate || '')} </span>
        <span> {weatherd.humidity} </span>
        <img src={imgBasePath + weatherd.iconDay + '.png'} />
        <span> {weatherd.tempMax}&#176;</span>
        <span className='weather-daily--bar'> </span>
        <span>{weatherd.tempMin}&#176; </span>
        <img src={imgBasePath + weatherd.iconNight + '.png'} />
      </div>))}
    </div>
  )
}
