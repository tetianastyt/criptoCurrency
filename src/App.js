import React from 'react';
import { Provider } from 'react-redux';
import Calculator from './components/Calculator/Calculator';
import './App.css';
import { store } from './engine/init/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <div className="App">
          <Calculator />
        </div>
      </Provider>
    </div>
  );
}

export default App;
