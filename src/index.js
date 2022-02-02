import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Home from './screens/home/Home';
import Details from './screens/details/Details';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Home />
     
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);