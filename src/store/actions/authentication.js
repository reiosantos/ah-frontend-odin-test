import types from 'store/types/authentication';
import { errorMessage, successMessage } from '../../helpers/toast';

export const showAuthModal = name => ({ type: types.SHOW_MODAL, name });

export const hideAuthModal = name => ({ type: types.HIDE_MODAL, name });
export const setUser = user => ({ type: types.LOGIN_USER, user });

export const loginUser = user => (dispatch, getState, http) => {
  // we will set the token every time a user is logged in
  http.setToken(user.token);
  dispatch(setUser(user));
};

export const signUp = user => (dispatch, getState, http) =>
  http
    .post('users/', { user })
    .then(data => {
      dispatch({ type: types.SIGNUP, payload: data });
      dispatch(hideAuthModal('signup'));
      successMessage(
        'You have been successfully registered .Please check your email and verify your account ',
      );
    })
    .catch(({ errors }) => {
      errorMessage(errors.email ? errors.email[0] : errors.username[0]);
      dispatch({ type: 'SIGNUP-ERRORS', errors });
    });
