import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from 'store';
import IndexPage from './IndexPage';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="App">
        <header className="App-header">Odin devs</header>
        <Route path="/" exact component={IndexPage} />
      </div>
    </BrowserRouter>
  </Provider>
);
export default App;
