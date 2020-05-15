import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchCity } from '../../actions/searchActions';

const Search = () => {
  const dispatch = useDispatch();
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchCity(city));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="text"
          name="citySearch"
          placeholder="enter city"
          value={city}
          onChange={({ target }) => setCity(target.value)}
        >
        </input>
      </label>
      <button>GO!</button>
    </form>
  );
};

export default Search;
