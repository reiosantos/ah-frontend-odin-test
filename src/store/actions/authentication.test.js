import types from 'store/types/authentication';
import { showAuthModal, hideAuthModal, loginUser } from 'store/actions/authentication';
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
});
