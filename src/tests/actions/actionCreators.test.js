import * as actions from 'store/actions/actionCreators';
import * as types from 'store/actions/types';
import mockStore from 'tests/mockStore';
import { SHOW_SIGNUP_MODAL } from '../../store/actions/types';

describe('async actions', () => {
  afterEach(() => {
    fetch.restore();
  });

  it('should signup user', () => {
    const data = { user: {} };
    fetch.post('https://authors-haven-odin.herokuapp.com/api/users/', data);

    const expectedActions = [
      { type: types.SIGNUP, payload: data },
      { type: SHOW_SIGNUP_MODAL, value: false },
    ];
    const store = mockStore({});

    return store.dispatch(actions.signUp()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should return errors on signup', () => {
    const store = mockStore({});
    const errors = {
      email: ['email already in use'],
      username: ['username already in use'],
    };

    fetch.post('https://authors-haven-odin.herokuapp.com/api/users/', {
      status: 403,
      body: { errors },
    });

    return store.dispatch(actions.signUp()).then(() => {
      expect(store.getActions()).toEqual([{ type: 'SIGNUP-ERRORS', errors }]);
    });
  });
});
