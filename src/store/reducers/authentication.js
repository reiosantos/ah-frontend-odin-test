import types from 'store/types/authentication';

const initialstate = {
  signupData: '',
  showModals: { login: false, signup: false },
  user: null,
};

const updateModal = (state, name, value) => ({
  ...state,
  showModals: {
    ...state.showModals,
    [name]: value,
  },
});

const signUpReducer = (state = initialstate, action) => {
  switch (action.type) {
    case types.SHOW_MODAL:
      return updateModal(state, action.name, true);
    case types.HIDE_MODAL:
      return updateModal(state, action.name, false);
    case types.LOGIN_USER:
      return { ...state, user: action.user };

    default:
      return state;
  }
};

export default signUpReducer;
