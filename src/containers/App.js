import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Notifications from 'react-notify-toast';
import store from 'store';
import IndexPage from './IndexPage';
import AuthenticationModals from './authentication/AuthenticationModals';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="App">
        <Notifications />
        <AuthenticationModals />
        <Route path="/" exact component={IndexPage} />
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
