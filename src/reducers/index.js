const initialState = { 
  cityData: {}
  weather:
};

export default function stateReducer(state = initialState, action) {
  switch(action.type) {
    case 'SEARCH':
      return { ...state, cityData: action.payload };
    default:
      return state;
  }
}
