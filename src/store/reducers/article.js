import types from 'store/actions/types';

const initialState = { all: [] };

export default (state = initialState, payload) => {
  switch (payload.type) {
    case types.ADD_ARTICLE:
      return { ...state, all: state.all.concat(payload.article) };
    case types.SET_ARTICLES:
      return { ...state, all: payload.articles };
    default:
      return state;
  }
};
