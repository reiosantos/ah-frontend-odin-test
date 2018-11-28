import { SIGNUP, SHOW_SIGNUP_MODAL } from './types';
import { errorMessage, successMessage } from '../../helpers/toast';

export const showSignUp = value => ({ type: SHOW_SIGNUP_MODAL, value });

export const signUp = user => (dispatch, getState, http) =>
  http
    .post('users/', { user })
    .then(data => {
      dispatch({ type: SIGNUP, payload: data });
      dispatch(showSignUp(false));
      successMessage(
        'You have been successfully registered .Please check your email and verify your account  ',
      );
    })
    .catch(({ errors }) => {
      errorMessage(errors.email ? errors.email[0] : errors.username[0]);
      dispatch({ type: 'SIGNUP-ERRORS', errors });
    });
