import { fetchCity } from '../services/apiFetch';

export const searchCity = (city) => dispatch => {
  return fetchCity(city)
    .then(cityData => {
      dispatch({
        type: 'SEARCH',
        payload: cityData
      });
    });
};
