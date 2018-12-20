import types from 'store/types/follow';

const initialState = {
  follow: 0,
  followersAndFollowing: {
    followers: [],
    following: [],
  },
};

const addFollow = (state = initialState, payload) => {
  switch (payload.type) {
    case types.FOLLOW_USER:
      return { ...state, follow: payload.data };
    case types.GET_FOLLOWERS:
      return {
        ...state,
        followersAndFollowing: {
          followers: payload.data.follower,
          following: payload.data.following || [],
        },
      };
    default:
      return state;
  }
};

export default addFollow;
