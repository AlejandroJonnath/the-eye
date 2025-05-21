import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import styled from 'styled-components';

export default function Blog() {
  return (
    <>
      <NavBar />
      <BlogWrapper>
        <div className="blog-container">
          <h1>La Historia de THE EYE</h1>
          <div className="logo-center">
            <img src="/logo.jpg" alt="THE EYE Logo" className="blog-logo" />
          </div>
          <p>
            <strong>THE EYE</strong> nació de una visión: crear un espacio donde la creatividad y la personalización se encuentren en cada producto. Todo comenzó con una simple pregunta: <em>¿Por qué conformarse con lo común cuando puedes tener algo único?</em>
          </p>
          <p>
            Edison Proaño, fundador de THE EYE, decidió transformar su pasión por el diseño y la innovación en una tienda que va más allá de lo convencional. Desde el primer día, nos propusimos ofrecer productos personalizados, de alta calidad y con un toque artístico que refleje la esencia de cada cliente.
          </p>
          <p>
            Cada artículo en THE EYE es una obra de arte, creada con dedicación y atención al detalle. Nos enorgullece acompañar a nuestros clientes en cada paso, desde la idea inicial hasta la entrega final, asegurando una experiencia memorable y productos que realmente marcan la diferencia.
          </p>
          <h2>¿Por qué elegirnos?</h2>
          <ul>
            <li>🎨 <strong>Personalización total:</strong> Tú imaginas, nosotros lo creamos.</li>
            <li>✨ <strong>Calidad premium:</strong> Materiales y acabados que destacan.</li>
            <li>🚚 <strong>Atención rápida y segura:</strong> Tu pedido llega a tiempo y en perfectas condiciones.</li>
            <li>💬 <strong>Asesoría personalizada:</strong> Te acompañamos en todo el proceso.</li>
          </ul>
          <p>
            Si buscas un regalo especial, un detalle único para tu espacio o simplemente quieres expresar tu estilo, <strong>THE EYE</strong> es tu mejor opción. ¡Atrévete a destacar y lleva contigo algo que hable de ti!
          </p>
          <div className="cta">
            <a href="/productos" className="cta-btn">Descubre nuestros productos</a>
            <a href="/OrderForm" className="cta-btn secondary">Personaliza el tuyo</a>
          </div>
        </div>
      </BlogWrapper>
      <Footer />
    </>
  );
}

const BlogWrapper = styled.div`
  min-height: 80vh;
  background: linear-gradient(120deg, #23233a 60%, #181818 100%);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 80px 0 40px 0;

  .blog-container {
    background: rgba(35,35,58,0.98);
    border-radius: 18px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.18);
    max-width: 650px;
    width: 92vw;
    padding: 2.5rem 2rem 2rem 2rem;
    margin: 0 auto;
    color: #fff;
    font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
    text-align: center;
    animation: fadeInUp 1s;
    border: 1.5px solid #23233a;
  }

  .logo-center {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.2rem;
  }

  .blog-logo {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    box-shadow: 0 2px 18px #ffd70055;
    background: #fff;
    border: 3px solid #ffdf2c;
    object-fit: cover;
    display: block;
  }

  h1 {
    font-size: 2.2em;
    font-weight: 900;
    margin-bottom: 0.5em;
    background: linear-gradient(90deg, #ffdf2c, #c6af6a 80%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
    letter-spacing: 0.04em;
    text-shadow: 0 2px 12px #18181833;
  }

  h2 {
    font-size: 1.3em;
    margin: 1.5em 0 0.7em 0;
    color: #ffdf2c;
    font-weight: 800;
    letter-spacing: 0.03em;
    text-shadow: 0 2px 8px #18181833;
  }

  ul {
    text-align: left;
    margin: 0 auto 1.5em auto;
    max-width: 420px;
    padding-left: 1.2em;
    font-size: 1.08em;
    color: #fff;
  }
  ul li {
    margin-bottom: 0.7em;
    line-height: 1.5;
    font-weight: 500;
    text-shadow: 0 1px 6px #18181833;
  }

  p {
    color: #eaeaea;
    font-size: 1.08em;
    margin-bottom: 1.1em;
    line-height: 1.7;
    text-shadow: 0 1px 6px #18181822;
  }

  .cta {
    margin-top: 2.2em;
    display: flex;
    gap: 1.2em;
    justify-content: center;
    flex-wrap: wrap;
  }
  .cta-btn {
    background: linear-gradient(90deg, #ffdf2c 60%, #c6af6a 100%);
    color: #23233a;
    font-weight: 800;
    padding: 0.85em 2em;
    border-radius: 12px;
    text-decoration: none;
    font-size: 1.08em;
    box-shadow: 0 2px 12px #ffd70033;
    transition: background 0.2s, color 0.2s, transform 0.18s;
    border: none;
    outline: none;
    margin-bottom: 0.5em;
    display: inline-block;
    letter-spacing: 0.03em;
  }
  .cta-btn:hover {
    background: linear-gradient(90deg, #c6af6a 60%, #ffdf2c 100%);
    color: #181818;
    transform: scale(1.06);
    text-decoration: none;
  }
  .cta-btn.secondary {
    background: linear-gradient(90deg, #23233a 60%, #181818 100%);
    color: #ffd700;
    border: 2px solid #ffd700;
  }
  .cta-btn.secondary:hover {
    background: #ffd700;
    color: #23233a;
    border: 2px solid #ffd700;
  }

  @media (max-width: 700px) {
    .blog-container {
      padding: 1.2rem 0.5rem 1.5rem 0.5rem;
    }
    h1 {
      font-size: 1.3em;
    }
    .blog-logo {
      width: 90px;
      height: 90px;
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;