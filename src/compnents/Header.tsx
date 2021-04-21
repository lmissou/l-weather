/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { ReactNode } from 'react'

interface IProps {
  children: ReactNode
}

export default function Header (props: IProps) {
  const headerCss = css`
    width: 100%;
    height: 6%;
    line-height: .1rem;
    text-align: center;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    div:first-of-type {
      box-sizing: border-box;
      margin-left: .03rem;
    }
    div:last-of-type {
      box-sizing: border-box;
      margin-right: .03rem;
    }
      
`

  return (
    <div css={headerCss}>
      {props.children}
    </div>
  )
}
