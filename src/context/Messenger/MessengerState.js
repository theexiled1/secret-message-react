import React, { useReducer } from 'react';
import MessengerContext from './messengerContext';
import MessengerReducer from './messengerReducer';

const MessengerState = props => {
  const initialState = {
    message: '',
    hasMessage: false
  };

  const [state, dispatch] = useReducer(MessengerReducer, initialState);

  const encryptMessage = message => {
    dispatch({ type: 'ENCRYPT_MESSAGE', payload: message });
  };

  const decryptMessage = message => {
    dispatch({ type: 'DECRYPT_MESSAGE' });
  };

  return (
    <MessengerContext.Provider
      value={{ message: state.message, encryptMessage, decryptMessage }}
    >
      {props.children}
    </MessengerContext.Provider>
  );
};

export default MessengerState;
