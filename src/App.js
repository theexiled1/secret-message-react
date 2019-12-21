import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MessengerState from './context/Messenger/MessengerState';
import Home from './components/Pages/Home';

import './App.css';

function App() {
  return (
    <Fragment>
      <MessengerState>
        <Router>
          <Switch>
            <Route exact path='/' component={Home}></Route>
          </Switch>
        </Router>
      </MessengerState>
    </Fragment>
  );
}

export default App;
