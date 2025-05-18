import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ProductsPage from '../pages/ProductsPage';
import OrderPage from '../pages/OrderPage';
import BankInfoPage from '../pages/BankInfoPage';
import LoginPage from '../pages/LoginPage';
import OrderForm from '../sections/OrderForm';
import Galeria from '../sections/Galeria';




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
      </Routes>
    </BrowserRouter>
  );
}
