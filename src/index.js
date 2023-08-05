import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Blog from './component/Blog';
import Contact from './component/Contact';
import Memories from './component/Memories';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="min-h-screen min-w-full">
    <React.StrictMode>
      <BrowserRouter>
        <Navbar classname="max-h-screen top-0" />
        <main className="min-h-screen ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Memories" element={<Memories />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </React.StrictMode>
  </div>,
);
