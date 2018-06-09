import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import Dashboard from '../components/ExpenseDashboard';
import AddExpense from '../components/AddExpense';
import Help from '../components/Help';
import NotFound from '../components/NotFound';

const AppRouter = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <div className="wrapup">
        <Switch>
          <Route path="/" component={Dashboard} exact />
          <Route path="/create" component={AddExpense} exact />
          <Route path="/help" component={Help} exact />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default AppRouter;
