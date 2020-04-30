import React from 'react';
import Contacts from './components/Contacts/Contacts';
import AddContact from './components/Contacts/AddContact';
import { Provider } from './Context';
import './scss/main.scss';

function App() {
  return (
    <Provider>
      <div className="App container">
        <hr/>
        <br/>
        <AddContact />
        <hr/>
        <Contacts />
      </div>
    </Provider>
  );
}

export default App;
