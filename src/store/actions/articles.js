import types from './types';

export const addArticle = article => ({ type: types.ADD_ARTICLE, article });

export const setArticles = articles => ({ type: types.SET_ARTICLES, articles });

export const getAllArticles = () => (dispatch, getState, http) =>
  http.get('/articles').then(({ article }) => {
    dispatch(setArticles(article));
  });
