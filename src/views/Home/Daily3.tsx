/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { imgBasePath } from '../../constant'
import { IWeatherDaily } from '../../store/weather'
import { dateToDay } from '../../utils'

export default function Daily3 ({ weather3d }: { weather3d: Array<IWeatherDaily> }) {
  const weatherDailyCss = css`
    height: .1rem;
    img {
      width: .04rem;
    }
  `
  const weatherDailyBarCss = css`
    display: inline-block;
    width: 120px;
    height: 6px;
    margin: 0 14px;
    border-radius: 5px;
    background-image: linear-gradient(to right, red, blue);
  `
  
  return (
    <div css={css`
      width: 100%;
      height: 24%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
    `}>
      {weather3d.map((weatherd: IWeatherDaily) => (<div key={weatherd.fxDate} css={weatherDailyCss}>
        <span>{dateToDay(weatherd.fxDate || '')} </span>
        <span> {weatherd.humidity} </span>
        <img src={imgBasePath + weatherd.iconDay + '.png'} />
        <span> {weatherd.tempMax}&#176;</span>
        <span css={weatherDailyBarCss}> </span>
        <span>{weatherd.tempMin}&#176; </span>
        <img src={imgBasePath + weatherd.iconNight + '.png'} />
      </div>))}
    </div>
  )
}
