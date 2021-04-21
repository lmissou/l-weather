/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { Route, HashRouter, Switch, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Home from './views/Home'
import CityList from './views/CityList'
import { IState } from './store/constants'

function App () {
  const city = useSelector((state: IState) => state.city.city)
  return (
    <div css={css`
      width: 100%;
      height: 100%;
    `}>
      <HashRouter>
        <Switch>
          <Route path="/citylist" component={CityList}/>
          <Route path="/" render={() => city.id ? <Home /> : <Redirect to="/citylist" />} />
        </Switch>
      </HashRouter>
    </div>
  )
}

export default App
