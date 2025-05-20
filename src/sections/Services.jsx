import '../styles/Services.css';

export default function Services() {
  return (
    
    <section id="servicios" className="services">
      
      <h2>Servicio Personalizado</h2>
      
      <p>Personalizamos camisetas y hoodies según lo que el cliente desee.</p>
      <p>Nuestros diseñadores crean artes a mano si no te gustan los predeterminados.</p>
      <p>Trabajamos contigo en cada paso del proceso, desde la idea inicial hasta el resultado final.</p>
      <p>Utilizamos materiales de alta calidad y técnicas artesanales para garantizar un acabado único y duradero.</p>
      
      <div className="solicitud-container">
        
        <a href="/OrderForm" className="solicitud-diseño">Solicita tu diseño</a>
      
      </div>
    
    </section>
  );
}