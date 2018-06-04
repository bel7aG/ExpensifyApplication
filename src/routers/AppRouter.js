import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import Dashboard from '../components/ExpenseDashboard';
import AddExpense from '../components/AddExpense';
import Help from '../components/Help';
import NotFound from '../components/NotFound';

export default () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Dashboard} exact />
        <Route path="/create" component={AddExpense} exact />
        <Route path="/help" component={Help} exact />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);









// import React from 'react';
// import Header from '../components/Header';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
//
// const Home = () => (
//   <div className="component">
//     <h1>Home Page</h1>
//   </div>
// );
//
// const Contact = () => (
//   <div className="component">
//     <h1>Contact Page</h1>
//   </div>
// );
//
// const Expenses = () => (
//   <div className="component">
//     <h1>Expense Page</h1>
//   </div>
// );
//
// const NotFound = () => (
//   <div>
//     <h1>404</h1>
//   </div>
// );
//
// const AppRouter = () => (
//   <BrowserRouter>
//     <div className="container">
//       <Header />
//       <Switch>
//         <Route path="/" component={Home} exact />
//         <Route path="/contact" component={Contact} exact />
//         <Route path="/expenses" component={Expenses} exact />
//         <Route component={NotFound} />
//       </Switch>
//     </div>
//   </BrowserRouter>
// );
//
// export default AppRouter;
