import { combineReducers } from 'redux';
import UIReducer from './UIReducer';
import articles from './article';

export default combineReducers({
  UIReducer,
  articles,
});
