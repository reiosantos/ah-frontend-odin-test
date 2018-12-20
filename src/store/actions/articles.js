import types from 'store/types/articles';
import { commentUrl } from 'utils/articles';

export const addArticle = article => ({ type: types.ADD_ARTICLE, article });

export const setArticles = articles => ({ type: types.SET_ARTICLES, articles });

export const setSingle = article => ({ type: types.SET_SINGLE, article });

export const addComment = comment => ({ type: types.ADD_COMMENT, comment });
export const setComments = comments => ({ type: types.SET_COMMENTS, comments });

export const fetchArticleBySlug = slug => (dispatch, getState, http) =>
  http.get(`articles/${slug}`).then(article => {
    dispatch(setSingle(article));
    // todo nest fetched comments with in the article  so we don't have to make an extra request
    http.get(commentUrl(article)).then(({ comment }) => dispatch(setComments(comment.results)));
  });

export const getAllArticles = () => (dispatch, getState, http) =>
  http.get('/articles').then(({ article }) => {
    const toDate = ({ updated_at: updatedAt }) => new Date(updatedAt);
    // sort articles by updated_at
    const articles = article.results.sort((a, b) => toDate(b) - toDate(a));

    return dispatch(setArticles(articles));
  });
