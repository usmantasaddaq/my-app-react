import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider} from 'react-redux';
import {createStore } from 're dux';
import './index.css';
import App from './container/App';
import reportWebVitals from './reportWebVitals';
import  'tachyons';
import { searchRobots } from './reducers';
const store = createStore(searchRobots)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store} /> 
  </React.StrictMode>

); 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); 