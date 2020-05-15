import React from 'react';
import Search from '../Search/Search';
import Weather from '../Weather/Weather';
import Trails from '../Trails/Trails';
import style from './AppStyle.css'

export default function App() {
  return (
    <div className={style.App}>
      <h3>Whats going down in your town?</h3> 
      <Search />
      <Weather />
      <Trails />
    </div>
  );
}
