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

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
      <div>
        <p>This is a Private info. Please don't share!</p>
        <WrappedComponent {...props}/>
      </div>
    );
};

const AdminInfo = withAdminWarning(Info);

ReactDOM.render(<AdminInfo info="There are the Details"/>, document.querySelector('.hoc'));
