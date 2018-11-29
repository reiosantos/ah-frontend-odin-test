import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Http from 'utils/Http';

export default configureMockStore([thunk.withExtraArgument(new Http('localhost:5000'))]);
