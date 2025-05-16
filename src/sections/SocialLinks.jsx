import React from 'react';
import { FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa';
import '../styles/SocialLinks.css';

export default function SocialLinks() {
  return (
    <section id="social" className="social-section">
      <h2>Síguenos en redes</h2>
      <div className="social-buttons">
        <a href="https://www.instagram.com/theeyetienda" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={32} />
        </a>
        <a href="https://www.facebook.com/theeyetienda" target="_blank" rel="noopener noreferrer">
          <FaFacebookF size={32} />
        </a>
        <a href="https://www.tiktok.com/@theeyetienda" target="_blank" rel="noopener noreferrer">
          <FaTiktok size={32} />
        </a>
      </div>
      {/* Embed Instagram Feed */}
      <div className="insta-feed">
        <iframe
          src="https://www.instagram.com/_addrriel/embed"
          title="Feed de Instagram"
          allowTransparency={true}
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
