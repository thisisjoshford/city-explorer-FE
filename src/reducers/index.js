import { fetchCity } from '../services/apiFetch';

const initialState = { 
  city: {}
};

export default function stateReducer(state = initialState, action) {
  switch(action.type) {
    case 'SEARCH':
      return { ...state, city: fetchCity(action.payload) };
    default:
      return state;
  }
}
