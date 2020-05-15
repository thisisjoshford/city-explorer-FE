import { fetchCity } from '../services/apiFetch';

export const searchCity = (city) => dispatch => {
  return fetchCity(city)
    .then(res => {
      dispatch({
        type: 'SEARCH',
        payload: {
          city: res.city,
          lat: res.latitude,
          lng: res.longitude,
          weather: res.weather,
          trails: res.trailData.results,
          yelp: res.yelpData.results,
          events: res.eventData.results
        }
      });
    });
};
