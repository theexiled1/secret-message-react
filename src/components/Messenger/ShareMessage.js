import React, { useContext } from 'react';
import MessageContext from '../../context/Messenger/messengerContext';

const ShareMessage = () => {
  const { message } = useContext(MessageContext);
  const clickHandler = () => {
    const messageText = document.getElementById('message');
    messageText.select();
    document.execCommand('copy');
  };

  return (
    <div>
      <input
        id='message'
        type='text'
        value={`${window.location}#${message}`}
        readOnly
      />
      <button onClick={clickHandler} className='btn'>
        Copy
      </button>
    </div>
  );
};

export default ShareMessage;
