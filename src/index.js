import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Layout from './pages/Layout'
import NoPage from './pages/NoPage'
import Work from './pages/Work'
import { useTheme } from '@nextui-org/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="About" element={<About />}/>
          <Route path="Contact" element={<Contact />} />
          <Route index element={<Home />} />
          <Route path="*" element={<NoPage />} />
          <Route path="Work" element={<Work />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals