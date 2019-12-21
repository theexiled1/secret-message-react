import React from 'react';

const Card = props => {
  return (
    <div className='col s8 offset-s2'>
      <div className='card-panel'>{props.children}</div>
    </div>
  );
};

export default Card;
