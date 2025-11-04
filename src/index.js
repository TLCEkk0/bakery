import React from 'react';
import ReactDOM from 'react-dom/client';
import './tailwind.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom'; // เพิ่มตรงนี้

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>   {/* เปลี่ยนจาก <React.StrictMode> เป็น <HashRouter> */}
    <App />
  </HashRouter>
);

reportWebVitals();
