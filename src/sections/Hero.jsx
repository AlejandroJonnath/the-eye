import '../styles/Products.css';
import { productos } from '../components/Products';

export default function Hero() {
  // Muestra los 6 primeros productos actuales del products.jsx
  const destacados = productos.slice(0, 6);

  return (
    <section
      id="inicio"
      className="products"
      style={{
        padding: "5rem 1rem 1.2rem",
        marginTop: "0",
        minHeight: "35vh",
        background: "linear-gradient(120deg, #181818 70%, #23233a 100%)",
        boxShadow: "0 8px 32px 0 rgba(227, 189, 75, 0.10)",
        borderRadius: "1.2rem",
        maxWidth: "1200px",
        marginLeft: "auto",
        marginRight: "auto",
        position: "relative",
        zIndex: 2
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontWeight: 900,
          fontSize: "clamp(2.3rem, 6vw, 3.2rem)",
          color: "#FFD700",
          letterSpacing: "2.5px",
          marginBottom: "0.7rem",
          marginTop: 0,
          textShadow: "0 2px 16px #0008"
        }}
      >
        THE EYE
      </h1>
      <p
        style={{
          textAlign: "center",
          color: "#e0e0e0",
          fontSize: "clamp(1.1rem, 2.5vw, 1.35rem)",
          margin: "0 0 2rem 0",
          fontWeight: 400,
          letterSpacing: "1px",
          textShadow: "0 2px 8px #0006"
        }}
      >
        Camisetas exclusivas, diseños originales y calidad premium. ¡Descubre tu estilo y destaca desde el primer momento!
      </p>
      <div
        className="product-grid"
        style={{
          gap: "1.2rem"
        }}
      >
        {destacados.map((p, i) => (
          <div
            key={i}
            className="flip-card"
            style={{
              minHeight: "180px",
              aspectRatio: "3/4"
            }}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="image-container">
                  <img src={p.imagen} alt={p.nombre} />
                </div>
                <h3>{p.nombre}</h3>
              </div>
              <div className="flip-card-back">
                <h3>{p.nombre}</h3>
                <p className="description">{p.descripcion}</p>
                <div className="product-details">
                  <p><strong>Tallas:</strong> {p.talla}</p>
                  <p><strong>Color:</strong> {p.color}</p>
                  <p><strong>Material:</strong> {p.material}</p>
                  <p><strong>Envío:</strong> {p.tiempo}</p>
                  <p><strong>Precio:</strong> {p.precio}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style>
        {`
          @media (max-width: 1200px) {
            .product-grid {
              grid-template-columns: repeat(3, 1fr) !important;
              gap: 1.2rem !important;
            }
          }
          @media (max-width: 992px) {
            .product-grid {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 1.5rem !important;
            }
            .flip-card {
              min-height: 220px !important;
              max-width: 99vw !important;
              display: flex !important;
              flex-direction: column !important;
              justify-content: center !important;
              padding: 1rem !important; /* Espacio interno */
              box-sizing: border-box !important;
            }
            .image-container {
              height: 170px !important;
              padding: 0.5rem !important; /* Espacio alrededor de la imagen */
              display: flex !important;
              align-items: center !important;
              justify-content: center !important;
            }
            .image-container img {
              width: 100% !important;
              height: 100% !important;
              object-fit: contain !important;
              border-radius: 1rem !important;
              box-shadow: 0 2px 8px #0002 !important;
              margin: 0 !important;
              display: block !important;
            }
          }
        `}
      </style>
    </section>
  );
}