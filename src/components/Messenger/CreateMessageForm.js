import React, { useState, useContext } from 'react';
import MessageContext from '../../context/Messenger/messengerContext';

const CreateMessageForm = () => {
  const [inputText, setInputText] = useState('');
  const messageContext = useContext(MessageContext);

  const textChangeHandler = e => {
    setInputText(e.target.value);
  };

  const formSubmitHandler = e => {
    e.preventDefault();
    // change message state to encrypted value
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <label>Enter a secret message:</label>
      <input type='text' value={inputText} onChange={textChangeHandler} />
      <button className='btn'>Create</button>
    </form>
  );
};

export default CreateMessageForm;
