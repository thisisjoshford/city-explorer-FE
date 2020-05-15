import { fetchCity } from '../services/apiFetch';

export const searchCity = (city) => dispatch => {
  return fetchCity(city)
    .then(res => {
      dispatch({
        type: 'SEARCH',
        payload: {
          city: res.cityName,
          lat: res.lat,
          lng: res.lng,
          weather: res.weather,
          trails: res.trails.results,
          yelp: res.yelp.results,
          events: res.events.results
        }
      });
    });
};
