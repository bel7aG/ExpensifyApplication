import React from 'react';
import Header from '../components/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Home = () => (
  <div className="component">
    <h1>Home Page</h1>
  </div>
);

const Contact = () => (
  <div className="component">
    <h1>Contact Page</h1>
  </div>
);

const Expenses = () => (
  <div className="component">
    <h1>Expense Page</h1>
  </div>
);

const NotFound = () => (
  <div>
    <h1>404</h1>
  </div>
);

const AppRouter = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/expenses" component={Expenses} exact />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
