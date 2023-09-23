import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import store from './states';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <ToastContainer />
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
);

reportWebVitals();
