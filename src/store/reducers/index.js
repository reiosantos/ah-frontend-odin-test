import { combineReducers } from 'redux';
import UIReducer from './UIReducer';
import articles from './article';
import signUpReducer from './signUpReducer';

export default combineReducers({
  UIReducer,
  articles,
  signUpReducer,
});
