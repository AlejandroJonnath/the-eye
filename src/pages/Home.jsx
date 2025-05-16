import React from 'react';
import NavBar from '../components/NavBar';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Services from '../sections/Services';
import SocialLinks from '../sections/SocialLinks';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Services />
      <SocialLinks />
      <Footer />
    </>
  );
}
