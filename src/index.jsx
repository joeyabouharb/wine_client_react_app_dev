import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './scss/index.scss';

render(
  <App className="container-fluid" />,
  document.getElementById('root'),
);
