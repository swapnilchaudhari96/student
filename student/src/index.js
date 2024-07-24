import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './App';
import SchoolProvider from './SchoolProvider';

ReactDOM.render(
  <SchoolProvider>
    <App />
  </SchoolProvider>,
  document.getElementById('root')
);
