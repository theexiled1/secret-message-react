import React, { useContext } from 'react';
import CreateMessageForm from './CreateMessageForm';
import ShareMessage from './ShareMessage';
import ViewMessage from './ViewMessage';
import Card from '../Layout/Card';
import MessageContext from '../../context/Messenger/messengerContext';

const Messenger = () => {
  const { message } = useContext(MessageContext);
  const { hash } = window.location;
  if (hash) {
    return (
      <div className='row main'>
        <Card>
          <ViewMessage />
        </Card>
      </div>
    );
  }
  return (
    <div className='row main'>
      <Card>{message === '' ? <CreateMessageForm /> : <ShareMessage />}</Card>
    </div>
  );
};

export default Messenger;
