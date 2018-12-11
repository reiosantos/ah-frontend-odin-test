import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store';
import AuthenticationModals, { mapActionsToProps } from './AuthenticationModals';

describe('Authentication Modals', () => {
  test('Authentication Modals renders without crashing', () => {
    expect(() =>
      mount(
        <MemoryRouter>
          <Provider store={store}>
            <AuthenticationModals />
          </Provider>
        </MemoryRouter>,
      ),
    ).not.toThrow();
  });

  test('it can trigger all store actions', () => {
    const dispatch = jest.fn();
    const actions = mapActionsToProps(dispatch);

    Object.keys(actions).forEach(action => actions[action]({}));

    expect(dispatch).toHaveBeenCalledTimes(Object.keys(actions).length);
  });
});
