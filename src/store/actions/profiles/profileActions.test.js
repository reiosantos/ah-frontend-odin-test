import mockStore from 'tests/mockStore';
import types from 'store/types/profiles';
import * as actions from './profileActions';

describe('async actions', () => {
  it('should fetch user profile', () => {
    let username;
    const data = {};
    fetch.get(`https://authors-haven-odin.herokuapp.com/api/profiles/${username}`, data);
    const expectedActions = [{ type: types.FETCH_PROFILE, payload: [] }];
    const store = mockStore({});

    return store.dispatch(actions.fetchProfile()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
