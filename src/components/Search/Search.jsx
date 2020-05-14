import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ cityName, onChange, onSubmit }) => (
  
  <form onSubmit={onSubmit}>
    <label>
      <input type="text"
        name="citySearch"
        placeholder="enter city"
        value={cityName}
        onChange={onChange}
      >
      </input>
    </label>
    <button>GO!</button>
  </form>

);

Search.propTypes = {
  cityName: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
export default Search;
