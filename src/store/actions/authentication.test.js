import types from 'store/types/authentication';
import {
  showAuthModal,
  hideAuthModal,
  loginUser,
  socialAuthentication,
} from 'store/actions/authentication';
import mockStore from 'tests/mockStore';

describe('Authentication actions', () => {
  test('showAuthModal returns the right type and name', () => {
    expect(showAuthModal('login')).toEqual({ type: types.SHOW_MODAL, name: 'login' });
  });

  test('hideAuthModal returns the right type and name', () => {
    expect(hideAuthModal('login')).toEqual({ type: types.HIDE_MODAL, name: 'login' });
  });

  test('loginUser returns the right type and name', () => {
    const user = { name: 'krmroland' };

    const store = mockStore({});

    store.dispatch(loginUser(user));

    expect(store.getActions()).toEqual([{ type: types.LOGIN_USER, user }]);
  });

  test('authenticate user', () => {
    const data = { user: {} };
    fetch.post('https://authors-haven-odin.herokuapp.com/api/google/', data);

    const expectedActions = [
      { type: 'LOGIN_USER', user: { user: {} } },
      { name: 'login', type: 'HIDE_AUTH_MODAL' },
    ];
    const store = mockStore({});
    const url = 'google/';
    const accessToken = 'saffsw3422555';

    return store.dispatch(socialAuthentication(url, { accessToken })).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
