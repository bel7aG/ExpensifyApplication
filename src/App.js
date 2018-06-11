import React, { Component } from 'react';
import AppRouter from './routers/AppRouter';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('component Mount');
  }

  componentDidUpdate() {
    console.log('ok');
  }

  render() {
    return (
      <AppRouter />
    );
  }
}

export { App as default, AppRouter };
