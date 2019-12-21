import React, { useContext } from 'react';
import MessageContext from '../../context/Messenger/messengerContext';

const ViewMessage = () => {
  const messageContext = useContext(messageContext);
  return (
    <div>
      <h1>Your Secret Message</h1>
    </div>
  );
};

export default ViewMessage;
