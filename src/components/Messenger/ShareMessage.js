import React, { useContext } from 'react';
import MessageContext from '../../context/Messenger/messengerContext';

const ShareMessage = () => {
  const { message } = useContext(MessageContext);
  return (
    <div>
      <input type='text' value={`${window.location}#${message}`} readOnly />
      <button className='btn'>Copy</button>
    </div>
  );
};

export default ShareMessage;
