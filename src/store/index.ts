import { combineReducers, createStore, applyMiddleware } from 'redux'
import createSagaMiddleWare from 'redux-saga'

import city from './city'
import weather from './weather'
import rootSata from './saga'

const sagaMiddleware = createSagaMiddleWare()

export default createStore(
  combineReducers({
    city,
    weather
  }),
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSata)
