import { signUp } from 'store/actions/authentication';
import mockStore from 'tests/mockStore';
import types from 'store/types/authentication';

describe('async actions', () => {
  afterEach(() => {
    fetch.restore();
  });

  it('should signup user', () => {
    const data = { user: {} };
    fetch.post('https://authors-haven-odin.herokuapp.com/api/users/', data);

    const expectedActions = [
      { type: types.SIGNUP, payload: data },
      { type: types.HIDE_MODAL, name: 'signup' },
    ];
    const store = mockStore({});

    return store.dispatch(signUp()).then(() => {
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

    return store.dispatch(signUp()).then(() => {
      expect(store.getActions()).toEqual([{ type: 'SIGNUP-ERRORS', errors }]);
    });
  });
});
