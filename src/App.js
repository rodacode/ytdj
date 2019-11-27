import React from 'react';
import './App.scss';
import Home from './views/Home';
import { Provider } from 'react-redux';
import { store } from './store/reducer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Home />
      </div>
    </Provider>

  );
}

export default App;
