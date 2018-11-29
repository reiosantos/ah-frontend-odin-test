import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import Http from 'utils/Http';
import { API_URL } from 'utils/constants';

import rootReducer from './reducers';

const http = new Http(API_URL);
const shouldLog = process.env.NODE_ENV === 'development';
const middleware = [thunk.withExtraArgument(http)];

/* istanbul ignore if */
if (shouldLog) {
  middleware.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
