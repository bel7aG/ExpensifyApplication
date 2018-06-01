import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './playground/redux';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
