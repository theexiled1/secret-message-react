import React, { useContext, useEffect } from 'react';
import MessageContext from '../../context/Messenger/messengerContext';

const ViewMessage = () => {
  const { decryptMessage, message } = useContext(MessageContext);
  useEffect(() => {
    decryptMessage();
  }, []);

  return (
    <div>
      <h1>Your Secret Message</h1>
      {message}
    </div>
  );
};

export default ViewMessage;
