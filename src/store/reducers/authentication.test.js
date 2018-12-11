import types from 'store/types/authentication';
import authenticationReducer from './authentication';

describe('Authentication reducers', () => {
  test('SHOW_MODAL', () => {
    const initialState = { showModals: { login: false, signup: false } };
    const newState = authenticationReducer(initialState, { type: types.SHOW_MODAL, name: 'login' });

    expect(newState).toEqual({
      showModals: { login: true, signup: false },
    });
  });

  test('HIDE_MODAL', () => {
    const initialState = { showModals: { login: true, signup: false } };
    const newState = authenticationReducer(initialState, { type: types.HIDE_MODAL, name: 'login' });

    expect(newState).toEqual({
      showModals: { login: false, signup: false },
    });
  });

  test('LOGIN_USER', () => {
    const initialState = { user: null };
    const user = { name: 'krmroland@gmail.com', token: 'Hmmm' };
    const newState = authenticationReducer(initialState, { type: types.LOGIN_USER, user });

    expect(newState).toEqual({ user });
  });
});
