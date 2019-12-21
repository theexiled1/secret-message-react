import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
      <Link to='/'>Create your own message and share it!</Link>
    </div>
  );
};

export default ViewMessage;
