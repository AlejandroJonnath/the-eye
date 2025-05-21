import React from 'react';
import NavBar from '../components/NavBar';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Services from '../sections/Services';
import SocialLinks from '../sections/SocialLinks';
import Footer from '../components/Footer';
import HelpModal from '../components/modal/helpModal'; // importa aquí
import ChatBot from '../chat/ChatBot'; // importa el ChatBot

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Services />
      <SocialLinks />
      <Footer />
      <HelpModal /> {/* anclado en la esquina */}
      <ChatBot openOnLoad={true} /> {/* ChatBot anclado y abierto al cargar */}
    </>
  );
}
