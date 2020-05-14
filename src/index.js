import React from 'react';
import { render } from 'react-dom';
import App from './components/App/App';
import { Provider } from 'react-redux';
import reduxStore from './reduxStore';

render(
  <Provider store={reduxStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
