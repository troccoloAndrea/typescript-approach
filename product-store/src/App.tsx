import React from 'react';
import Navbar from './shared/Navbar'
import ProductPage from './pages/Product/ProductPage';
import CategoryPage from './pages/Category/CategoryPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Footer from './shared/Footer';


function App() {
  return (
    <Router>
      <div>
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<ProductPage />} />
            <Route path="/categories" element={<CategoryPage/>} />
          </Routes>        
        </main>
      </div>
      <footer>
        <Footer/>
      </footer>
    </Router>
    
  );
}

export default App;
