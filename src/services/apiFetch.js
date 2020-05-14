export const fetchCity = (city) => {
  return fetch(`https://city-explorer-be.herokuapp.com/location?search=${city}`)
    .then(res => res.json());
};
