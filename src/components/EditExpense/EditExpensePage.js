import React from 'react';

export default (props) => {
  console.log(props);
  return (
    <div>
      <h1>EditExpensePage {props.id}</h1>
    </div>
  );
};
