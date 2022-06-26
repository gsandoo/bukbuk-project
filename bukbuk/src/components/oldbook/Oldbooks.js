import React, { useState } from 'react';
import MapContainer from './MapContainer';
import '../../css files/oldbook.css';

import Menu from '../navibar/Menu';

function Oldbooks() {
  const [InputText, setInputText] = useState('')
  const [Place, setPlace] = useState('')

  const onChange = (e) => {
    setInputText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setPlace(InputText)
    setInputText('')
  }

  return (
      <>

    <Menu/>
    <div id='oldbook'>
      <form className="inputForm" onSubmit={handleSubmit}>
        <input 
        placeholder="'사는동네'+'서점' 을 검색하세요" 
        onChange={onChange} 
        value={InputText} 
        />
        <button type="submit">검색</button>
      </form>
      <MapContainer 
      searchPlace={Place}
      className="map" />
    </div>
    </>
  )
}

export default Oldbooks;