import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ProductsPage from '../pages/ProductsPage';
import OrderPage from '../pages/OrderPage';
import BankInfoPage from '../pages/BankInfoPage';
import LoginPage from '../pages/LoginPage';
import OrderForm from '../sections/OrderForm';
import Galeria from '../sections/Galeria';
import LoginAdmin from '../components/loginAdmin';
import Contacto from '../sections/Contacto'; 
import Blog from '../sections/Blog'; 
import Dashboard from '../sections/Dashboard'; 

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<ProductsPage />} />
        <Route path="/ordenar" element={<OrderPage />} />
        <Route path="/informacion-bancaria" element={<BankInfoPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/OrderForm" element={<OrderForm />} />
        <Route path="/Galeria" element={<Galeria />} />
        <Route path="/loginAdmin" element={<LoginAdmin />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/Contacto" element={<Contacto />} /> 
        <Route path="/blog" element={<Blog />} /> 
      </Routes>
    </BrowserRouter>
  );
}
