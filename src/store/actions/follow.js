import types from 'store/types/follow';

export const fetchFollowers = () => (dispatch, getState, http) =>
  http
    .withAuthentication()
    .get(`profiles/followers/`)
    .then(data => {
      dispatch({ type: types.GET_FOLLOWERS, data });
    });

export const addFollow = (username, isFollowing) => (dispatch, getState, http) => {
  const httpRequest = http.withAuthentication();
  let response;
  if (isFollowing) {
    response = httpRequest.delete(`profiles/${username}/unfollow/`, {});
  } else {
    response = httpRequest.post(`profiles/${username}/follow/`, {});
  }
  response.then(data => {
    dispatch({ type: types.FOLLOW_USER, payload: data });
    dispatch(fetchFollowers());
  });
};
