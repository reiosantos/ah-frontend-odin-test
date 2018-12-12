import types from 'store/types/follow';

export const addFollow = username => (dispatch, getState, http) =>
  http
    .withAuthentication()
    .post(`profiles/${username}/follow/`)
    .then(data => {
      dispatch({ type: types.FOLLOW_USER, payload: data });
    });
