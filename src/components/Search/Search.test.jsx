import React from 'react';
import { shallow } from 'enzyme';
import Search from './Search';
import { Provider } from 'react-redux';
import store from '../../reduxStore';

describe('Searcg component', () => {
  it('renders Searcg', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Search />
      </Provider>
      
    );
    expect(wrapper).toMatchSnapshot();
  });
});
