import React, { useState } from 'react';

const CreateMessageForm = () => {
  const [inputText, setInputText] = useState('');

  const textChangeHandler = e => {
    setInputText(e.target.value);
  };

  const formSubmitHandler = e => {
    e.preventDefault();
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
