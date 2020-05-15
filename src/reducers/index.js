const initialState = { 
  city: '',
  lat: '',
  lng: '',
  weather: [],
  trails: [],
  yelp: [],
  events: []
};

export default function stateReducer(state = initialState, action) {
  switch(action.type) {
    case 'SEARCH':
      return { ...state, 
        cityName: action.payload.cityName,
        lat: action.payload.lat,
        lng: action.payload.lng,
        weather: action.payload.weather,
        trails: action.payload.trails,
        yelp: action.payload.yelp,
        events: action.payload.events
      };
    default:
      return state;
  }
}
