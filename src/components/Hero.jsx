import '../styles/Hero.css';

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <h1>Bienvenido a THE EYE</h1>
      <h2>Estilo único, calidad garantizada</h2>
      <p>
        Tu tienda de camisetas y hoodies personalizadas. Diseños únicos, hechos a mano.<br />
        ¡Expresa tu personalidad con cada prenda!
      </p>
      <ul className="hero-benefits">
        <li>✔️ Envíos a todo Quito</li>
        <li>✔️ Materiales premium y ecológicos</li>
        <li>✔️ Atención personalizada</li>
        <li>✔️ Promociones exclusivas cada mes</li>
      </ul>
      <a href="#productos" className="hero-cta">Ver productos</a>
    </section>
  );
}
