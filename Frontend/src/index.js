import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Hotels from './Hotels.js';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Blog from './Blogs.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
              <Route path="/" element={<App />} />
              <Route path="/hotels" element={<Hotels />} />
              <Route path="/blog" element={<Blog />} />
      </Routes>
      
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
