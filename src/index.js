import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import App from './App';

const root = ReactDOM.createRoot(document.querySelector('#root'));
library.add(faBars, faSearch);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
