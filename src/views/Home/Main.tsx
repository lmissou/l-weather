/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { MouseEventHandler, ReactElement } from 'react'
import { imgBasePath } from '../../constant'
import { IWeatherNow } from '../../store/weather'

export default function Main({ handleClick, weatherNow }: { handleClick: MouseEventHandler, weatherNow: IWeatherNow }): ReactElement {

  return (
    <div css={css`
      width: 100%;
      height: 70%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `}>
      <div css={css`
        height: .25rem;
        span:first-of-type {
          font-size: .2rem;
        }
        span:nth-of-type(2) {
          font-size: .02rem;
          vertical-align: top;
        }`} onClick={handleClick}>
        <span>{weatherNow.temp}</span>
        <span> &#176;C </span>
      </div>
      <div css={css`
        color: var(--primary-color);
        width: 1rem;
        height: .4rem;
        text-align: center;
      `}>
        {weatherNow.text}
        <img css={css`
          height: .04rem;
          vertical-align: middle;
        `} src={imgBasePath + (weatherNow.icon || '100') + '.png'} />
      </div>
    </div>
  )
}
