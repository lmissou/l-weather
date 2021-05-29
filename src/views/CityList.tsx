/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { ICity } from '../store/city'
import { FETCH_CITY, IState, SET_CUR_CITY } from '../store/constants'

export default function CityList() {
  const cityList = useSelector((state: IState) => state.city.cityList)
  const dispatch = useDispatch()
  const history = useHistory()
  const [queryCityName, setQuetyCityName] = useState('')
  const onCityChange = (e: any) => {
    setQuetyCityName(e.target.value)
  }
  const handleSearchClick = () => {
    dispatch({ type: FETCH_CITY, payload: queryCityName })
  }
  const handleCityClick = (city: ICity) => {
    dispatch({ type: SET_CUR_CITY, payload: city })
    history.push('/')
  }

  return (
    <div>
      <input value={queryCityName} onChange={onCityChange} />
      <button onClick={handleSearchClick}>查询</button>
      <ul>
        {cityList.map((city: ICity) => (<li key={city.id} onClick={() => handleCityClick(city)}>{city.name} - {city.adm2},{city.adm1},{city.country}</li>))}
      </ul>
    </div>
  )
}
