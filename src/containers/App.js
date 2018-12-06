import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Notifications from 'react-notify-toast';
import store from 'store';
import IndexPage from './IndexPage';
import SignUpModal from './authentication/SignUpModal';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="App">
        <Notifications />
        <SignUpModal />
        <Route path="/" exact component={IndexPage} />
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
