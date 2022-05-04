import React from 'react';
import Navbar from './shared/Navbar'
import ProductPage from './pages/Product/ProductPage';
import CategoryPage from './pages/Category/CategoryPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Footer from './shared/Footer';
import InsertProduct from './pages/Product/InsertProduct';
import EditProduct from './pages/Product/EditProduct';


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
            <Route path="/product/insert" element={<InsertProduct/>}/>
            <Route path="/product/edit/:id" element={<EditProduct/>}/>
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
