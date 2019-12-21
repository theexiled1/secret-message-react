import React, { Fragment } from 'react';
import MessengerState from './context/Messenger/MessengerState';
import Messenger from './components/Messenger/Messenger';

import './App.css';

function App() {
  return (
    <Fragment>
      <MessengerState>
        <Messenger />
      </MessengerState>
    </Fragment>
  );
}

export default App;
