import articleReducer from 'store/reducers/article';
import types from 'store/actions/types';

let initialState;
let articles;

describe('Article reducer', () => {
  beforeEach(() => {
    initialState = { all: [] };
    articles = [{ title: 'Some title' }, { title: 'some other titles' }];
  });

  test('It sets all articles', () => {
    const newState = articleReducer(initialState, { type: types.SET_ARTICLES, articles });

    expect(newState.all).toHaveLength(2);
  });

  test('It adds a new article', () => {
    const newState = articleReducer(initialState, {
      type: types.ADD_ARTICLE,
      article: { title: 'Hey' },
    });

    expect(newState.all).toHaveLength(1);
  });
});
