import '../styles/products.css';
import pd1 from '../assets/pd1.jpg';
import pd2 from '../assets/pd2.jpg';
import pd3 from '../assets/pd3.jpg';

const productos = [
  { nombre: 'Camiseta Negra', imagen: pd1, descripcion: 'Diseño a mano en stock' },
  { nombre: 'Camiseta Blanca', imagen: pd2, descripcion: 'Diseño a mano en stock' },
  { nombre: 'Camiseta Gris', imagen: pd3, descripcion: 'Diseño a mano en stock' },
  // Agrega más productos aquí, exactamente como arriba pero con la foto de cada uno
  // las fotos están en assets, pero el logo está en public. No tocar nada de public

];

export default function Products() {
  return (
    <section id="productos" className="products">
      <h2>Productos en stock</h2>
      <div className="product-grid">
        {productos.map((p, i) => (
          <div key={i} className="product-card">
            <img src={p.imagen} alt={p.nombre} />
            <h3>{p.nombre}</h3>
            <p>{p.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
