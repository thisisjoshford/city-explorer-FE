import React from 'react';
import Search from '../Search/Search';
import Weather from '../Weather/Weather';
import Trails from '../Trails/Trails';
import Header from '../Header/Header';
import style from './AppStyle.css';

export default function App() {
  return (
    <div className={style.App}>
      <Header />
      <Search />
      <Weather />
      <Trails />
    </div>
  );
}
