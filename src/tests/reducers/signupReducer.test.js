import * as types from '../../store/actions/types';
import signUpReducer from '../../store/reducers/signUpReducer';

describe('signup reducer', () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      signupData: '',
      isSigningUp: false,
    };
  });
  it('should return the initial state', () => {
    expect(signUpReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle SIGNUP action', () => {
    const data = {
      signupData: '',
      isSigningUp: false,
    };

    expect(
      signUpReducer(initialState, {
        type: types.SIGNUP,
        payload: data,
      }),
    ).toEqual({ isSigningUp: false, signupData: data });
  });

  it('should show signup modal', () => {
    const data = {
      signupData: '',
      isSigningUp: false,
    };

    expect(
      signUpReducer(initialState, {
        type: types.SHOW_SIGNUP_MODAL,
        payload: data,
      }),
    ).toEqual({ isSigningUp: undefined, signupData: '' });
  });
});
