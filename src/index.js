import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ToastProvider } from 'react-toast-notifications';
import App from './components/App';
import store from './store';

import './styles.css';

ReactDOM.render(
  <Provider store={store}>
    <ToastProvider placement="bottom-right">
      <App />
    </ToastProvider>
  </Provider>,
  document.getElementById('root'),
);
