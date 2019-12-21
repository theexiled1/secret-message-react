import React, { useContext, useEffect } from 'react';
import MessageContext from '../../context/Messenger/messengerContext';

const ViewMessage = () => {
  const { decryptMessage, message } = useContext(MessageContext);
  useEffect(() => {
    decryptMessage();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h4>{message}</h4>
      <a href='./'>Create your own message and share it!</a>
    </div>
  );
};

export default ViewMessage;
