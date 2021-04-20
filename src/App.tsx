/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { Route, HashRouter, Switch } from 'react-router-dom'

import Home from './views/Home'
import CityList from './views/CityList'

function App() {

  return (
    <div css={css`
      width: 100%;
      height: 100%;
    `}>
      <HashRouter>
        <Switch>
          <Route path="/citylist" component={CityList}/>
          <Route path="/" component={Home}/>
        </Switch>
      </HashRouter>
    </div>
  )
}

export default App
