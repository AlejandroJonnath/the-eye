import '../styles/Hero.css';
import { Link } from 'react-router-dom';

const benefits = [
  { icon: "🚚", text: "Envíos rápidos a todo Quito y alrededores" },
  { icon: "🌱", text: "Materiales premium, ecológicos y duraderos" },
  { icon: "🤝", text: "Atención personalizada y asesoría en tu compra" },
  { icon: "🎁", text: "Promociones y descuentos exclusivos cada mes" },
  { icon: "🛡️", text: "Satisfacción garantizada o te devolvemos tu dinero" }
];

export default function Hero() {
  return (
    <section id="inicio" className="hero" aria-label="Sección principal de bienvenida">
      <header>
        <h1>Bienvenido a <span style={{ color: "#FFD700" }}>THE EYE</span></h1>
        <h2>Estilo único, calidad garantizada</h2>
      </header>
      <p>
        Descubre tu tienda de camisetas y hoodies personalizadas.<br />
        Diseños originales hechos a mano para expresar tu personalidad.<br />
        <strong>¡Haz tu pedido hoy y destaca con estilo!</strong>
      </p>
      <ul className="hero-benefits" aria-label="Beneficios de comprar en THE EYE">
        {benefits.map((b, i) => (
          <li key={i}>
            <span aria-hidden="true" style={{ marginRight: 8 }}>{b.icon}</span>
            {b.text}
          </li>
        ))}
      </ul>
      <Link to="/productos" className="hero-cta" aria-label="Ver productos de THE EYE">
        Ver productos
      </Link>
    </section>
  );
}