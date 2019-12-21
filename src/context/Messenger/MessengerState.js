import React, { useReducer } from 'react';
import MessengerContext from './messengerContext';
import MessengerReducer from './messengerReducer';

const MessengerState = props => {
  const initialState = {
    message: '',
    hasMessage: false
  };

  const [state, dispatch] = useReducer(MessengerReducer, initialState);

  return (
    <MessengerContext.Provider value={{}}>
      {props.children}
    </MessengerContext.Provider>
  );
};

export default MessengerState;
