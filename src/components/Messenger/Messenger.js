import React, { useContext } from 'react';
import CreateMessageForm from './CreateMessageForm';
import ShareMessage from './ShareMessage';
import MessageContext from '../../context/Messenger/messengerContext';

const Messenger = () => {
  const { message } = useContext(MessageContext);
  return <div>{message === '' ? <CreateMessageForm /> : <ShareMessage />}</div>;
};

export default Messenger;
