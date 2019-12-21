import React, { useContext } from 'react';
import CreateMessageForm from './CreateMessageForm';
import ShareMessage from './ShareMessage';
import Card from '../Layout/Card';
import MessageContext from '../../context/Messenger/messengerContext';

const Messenger = () => {
  const { message } = useContext(MessageContext);
  return (
    <div className='row'>
      <Card>{message === '' ? <CreateMessageForm /> : <ShareMessage />}</Card>
    </div>
  );
};

export default Messenger;
