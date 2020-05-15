export const fetchCity = (city) => {
  return fetch(`https://city-explorer-be.herokuapp.com/location?search=${city}`)
    .then(res => res.json());
};

export const fetchWeather = () => {
  return fetch('https://city-explorer-be.herokuapp.com/weather')
    .then(res => res.json());
};
