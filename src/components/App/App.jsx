import React from 'react';
import Search from '../Search/Search';
import Weather from '../Weather/Weather';

export default function App() {
  return (
    <>
      <h3>Whats going down in your town?</h3> 
      <Search />
      <Weather />
    </>
  );
}
