import types from 'store/types/articles';

const initialState = {
  follow: 0,
};

const addFollow = (state = initialState, payload) => {
  switch (payload.type) {
    console.log(payload);
    case types.FOLLOW_USER:
      return { ...state, follow: payload.data };
    default:
      return state;
  }
};

export default addFollow;
