import signUpReducer from 'store/reducers/authentication';
import { showAuthModal } from 'store/actions/authentication';

describe('authentication reducer', () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      signupData: '',
      showModals: { login: false, signup: false },
      user: null,
    };
  });
  test('should return the initial state', () => {
    expect(signUpReducer(undefined, {})).toEqual(initialState);
  });

  test('shows signup modal', () => {
    expect(signUpReducer(initialState, showAuthModal('signup'))).toEqual(
      expect.objectContaining({ showModals: { signup: true, login: false } }),
    );
  });
});
