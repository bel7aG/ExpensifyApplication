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
        {props.isAdmin && <p>This is a Private info. Please don't share!</p>}
        <WrappedComponent {...props}/>
      </div>
    );
};

const requireAuthentication = (WrappedAuthentication) => {
  return (props) => (
    <div>
      {props.isAuth ? (
        <WrappedAuthentication {...props}/>
      ) : (
        <p>Pleae login to view the INFO</p>
      )}
    </div>
  );
}
const AdminAuth = requireAuthentication(Info);

const AdminInfo = withAdminWarning(Info);

// ReactDOM.render(<AdminInfo isAdmin={false} info="There are the Details"/>, document.querySelector('.hoc'));
ReactDOM.render(<AdminAuth isAuth={true} info="There are the Details"/>, document.querySelector('.hoc'));
