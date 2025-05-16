import '../styles/Products.css';
import pd1 from '../assets/pd1.jpg';
import pd2 from '../assets/pd2.jpg';
import pd3 from '../assets/pd3.jpg';
import pd4 from '../assets/pd4.jpg';
import pd5 from '../assets/pd5.jpg';
import pd6 from '../assets/pd6.jpg';
import pd7 from '../assets/pd7.jpg';
import pd8 from '../assets/pd8.jpg';
import pd9 from '../assets/pd9.jpg';
import pd10 from '../assets/pd10.jpg';
import pd11 from '../assets/pd11.jpg';

const productos = [
  { nombre: 'Personalizada 1', imagen: pd1, descripcion: 'Diseño a mano en stock' },
  { nombre: 'Personalizada 2', imagen: pd2, descripcion: 'Diseño a mano en stock' },
  { nombre: 'Personalizada 3', imagen: pd3, descripcion: 'Diseño a mano en stock' },
  { nombre: 'Personalizada 4', imagen: pd4, descripcion: 'Diseño a mano en stock' },
  { nombre: 'Personalizada 5', imagen: pd5, descripcion: 'Diseño a mano en stock' },
  { nombre: 'Personalizada 6', imagen: pd6, descripcion: 'Diseño a mano en stock' },
  { nombre: 'Personalizada 7', imagen: pd7, descripcion: 'Diseño a mano en stock' },
  { nombre: 'Personalizada 8', imagen: pd8, descripcion: 'Diseño a mano en stock' },
  { nombre: 'Personalizada 9', imagen: pd9, descripcion: 'Diseño a mano en stock' },
  { nombre: 'Personalizada 10', imagen: pd10, descripcion: 'Diseño a mano en stock' },
  { nombre: 'Personalizada 11', imagen: pd11, descripcion: 'Diseño a mano en stock' }
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
