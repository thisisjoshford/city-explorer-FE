import React from 'react';
import { shallow } from 'enzyme';
import Trails from './Trails';
import { Provider } from 'react-redux';
import store from '../../reduxStore';

describe('Trails component', () => {
  it('renders Trails', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Trails />
      </Provider>
      
    );
    expect(wrapper).toMatchSnapshot();
  });
});
