import { SIGNUP, SHOW_SIGNUP_MODAL } from '../../actions/types';

const initialstate = {
  signupData: '',
  isSigningUp: false,
};

const signUpReducer = (state = initialstate, action) => {
  switch (action.type) {
    case SIGNUP:
      return { ...state, signupData: action.payload };
    case SHOW_SIGNUP_MODAL:
      return { ...state, isSigningUp: action.value };

    default:
      return state;
  }
};

export default signUpReducer;
