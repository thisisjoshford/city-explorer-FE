import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCity } from '../../services/apiFetch';

const Search = () => {
  const dispatch = useDispatch();
  const [city, setCity] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(fetchCity(city));
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

Search.propTypes = {
  cityName: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
export default Search;
