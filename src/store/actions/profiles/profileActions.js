import types from 'store/types/profiles';

export const fetchProfile = username => (dispatch, getState, http) =>
  http

    .withAuthentication()
    .get(`profile/${username}`)
    .then(data => {
      dispatch({ type: types.FETCH_PROFILE, payload: data });
    })
    .catch(({ profile }) => {
      window.Notify.error(profile.detail);
    });

export const updateProfile = (profile, username) => (dispatch, getState, http) =>
  http
    .withAuthentication()
    .put(`profile/${username}`, { bio: profile.bio, image: profile.image })
    .then(data => {
      dispatch({ type: types.UPDATE_PROFILE, payload: data });
      dispatch({ type: types.FETCH_PROFILE, payload: data });
      window.Notify.success('Profile updated');
    })
    .catch(({ profile }) => {
      window.Notify.error(profile.detail);
    });
