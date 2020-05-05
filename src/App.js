import React from 'react';
import Contacts from './components/Contacts/Contacts';
import AddContact from './components/Contacts/AddContact';
import { Provider } from './Context';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/Pages/About';
import NotFound from './components/Pages/NotFound';
import Header from './components/Layout/Header';
import Testpage from './components/Pages/Testpage';
import './scss/main.scss';
import EditContact from './components/Contacts/EditContact';

function App() {
  return (
    <Provider>
      <Router>
        <Header />
        <div className="App container">
          <Switch>
            <Route exact path="/" component={Contacts} />
            <Route path="/contact/add" component={AddContact} />
            <Route path="/contact/edit/:id" component={EditContact} />
            <Route path="/about" component={About} />
            <Route path="/test" component={Testpage} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
