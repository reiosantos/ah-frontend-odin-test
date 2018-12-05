import React from 'react';
import { shallow } from 'enzyme';
import { NavBar, mapActionsToProps } from './NavBar';

describe('NavBar', () => {
  test('It shows the Auth Links if a user is authenticated', () => {
    const wrapper = shallow(<NavBar showModal={jest.fn()} user={{ username: 'krm' }} />);

    expect(wrapper.find('AuthLinks')).toHaveLength(1);
  });

  test('mapActionsToProps triggers show modal', () => {
    const dispatch = jest.fn();

    mapActionsToProps(dispatch).showModal('login');
    expect(dispatch).toHaveBeenCalled();
  });
});
