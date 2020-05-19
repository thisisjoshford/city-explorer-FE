import React from 'react';
import { shallow } from 'enzyme';
import Weather from './Weather';
import { Provider } from 'react-redux';
import store from '../../reduxStore';

describe('Weather component', () => {
  it('renders Weather', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Weather />
      </Provider>
      
    );
    expect(wrapper).toMatchSnapshot();
  });
});
