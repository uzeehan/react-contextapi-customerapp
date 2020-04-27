import React from 'react';
import Contacts from './components/customer/Contacts';
import { Provider } from './Context';
import './scss/main.scss';

function App() {
  return (
    <Provider>
      <div className="App container">
        <Contacts />
      </div>
    </Provider>
  );
}

export default App;
