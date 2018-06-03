// Higher Order Component (HOC)

// ==> A Component (HOC) that render another component.

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>INFO</h1>
    <p>The INFO is : {props.info}</p>
  </div>
);

ReactDOM.render(<Info info="There are the Details"/>, document.querySelector('.hoc'));
