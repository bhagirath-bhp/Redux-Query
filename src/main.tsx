// // import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
// import './index.css'
// import createStore from './store.js'
// const store = createStore();
// import { Provider } from 'react-redux';

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   // <React.StrictMode>
//   //   <App />
//   // </React.StrictMode>,
// )

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import store from './store'; // Import your Redux store

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
