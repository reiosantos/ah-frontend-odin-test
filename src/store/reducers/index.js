import { combineReducers } from 'redux';
import addFollow from './follow';
import ui from './ui';
import articles from './article';
import authentication from './authentication';
import forms from './forms';
import profiles from './profilesReducer';

export default combineReducers({
  ui,
  articles,
  authentication,
  forms,
  addFollow,
  profiles,
});
