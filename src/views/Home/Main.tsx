/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { ReactElement, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { imgBasePath } from '../../constant'
import { FETCH_WEATHER_3D, FETCH_WEATHER_NOW, IState } from '../../store/constants'
import { IWeatherNow } from '../../store/weather'

export default function Main (): ReactElement {
  const mainCss = css`
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .weather-temp {
      height: .25rem;
    }
    .weather-temp span:first-of-type {
      font-size: .2rem;
    }
    .weather-temp span:nth-of-type(2) {
      font-size: .02rem;
      vertical-align: top;
    }
    .weather-text {
      color: var(--primary-color);
      width: 1rem;
      height: .4rem;
      text-align: center;
    }
    .weather-img {
      height: .04rem;
      vertical-align: middle;
    }

      
`
  const dispatch = useDispatch()
  const weatherNow: IWeatherNow = useSelector((state: IState) => state.weather.now)
  const handleClick = () => {
    dispatch({ type: FETCH_WEATHER_NOW })
    dispatch({ type: FETCH_WEATHER_3D })
  }
  useEffect(() => {
    dispatch({ type: FETCH_WEATHER_NOW })
  }, [])
  return (
    <div css={mainCss}>
      <div className='weather-temp' onClick={handleClick}>
        <span>{weatherNow.temp}</span>
        <span> &#176;C </span>
      </div>
      <div className='weather-text'>
        {weatherNow.text}
        <img className='weather-img' src={imgBasePath + weatherNow.icon + '.png'}/>
      </div>
    </div>
  )
}
