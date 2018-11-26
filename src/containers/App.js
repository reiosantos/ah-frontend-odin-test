import React from 'react';
import { Provider } from 'react-redux';
import store from 'store';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <header className="App-header">Hello world</header>
    </div>
  </Provider>
);
export default App;
