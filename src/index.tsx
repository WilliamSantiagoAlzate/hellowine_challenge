import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Routes } from './routes/index';
import { storeFn } from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeFn()}>
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
