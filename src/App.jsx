import React from 'react';
import NavBar      from './components/NavBar';
import Hero        from './components/Hero';
import About       from './components/About';
import OrderForm   from './components/OrderForm';
import Products    from './components/Products';
import Services    from './components/Services';
import SocialLinks from './components/SocialLinks';
import Footer      from './components/Footer';

export default function App() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <About />
        <Products />
        <Services />
        <OrderForm />
      </main>
      <SocialLinks />
      <Footer />
    </>
  );
}