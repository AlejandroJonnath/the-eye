import '../styles/products.css';
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
import pd12 from '../assets/pd12.jpg';
import pd13 from '../assets/pd13.jpg';
import pd14 from '../assets/pd14.jpg';
import pd15 from '../assets/pd15.jpg';
import pd16 from '../assets/pd16.jpg';
import pd17 from '../assets/pd17.jpg';
import pd18 from '../assets/pd18.jpg';
import pd19 from '../assets/pd19.jpg';
import pd20 from '../assets/pd20.jpg';
import pd21 from '../assets/pd21.jpg';


const productos = [
  { nombre: 'Edix Music', imagen: pd1, descripcion: 'Diseño a mano en stock' },
  { nombre: 'Canserbero', imagen: pd2, descripcion: 'Diseño a mano en stock' },
  { nombre: 'Canserbero1', imagen: pd3, descripcion: 'Diseño a mano en stock' },
  { nombre: 'Jujutsu Kaisen', imagen: pd4, descripcion: 'Diseño a mano en stock' },
  { nombre: 'Baki', imagen: pd5, descripcion: 'Diseño a mano en stock' },
  { nombre: 'Jujutsu Kaisen1', imagen: pd6, descripcion: 'Diseño a mano en stock' },
  { nombre: 'Always The Eye', imagen: pd7, descripcion: 'Diseño a mano en stock' },
  { nombre: 'The Eye Savage red', imagen: pd8, descripcion: 'Diseño a mano en stock' },
  { nombre: 'Urban The Eye', imagen: pd9, descripcion: 'Diseño a mano en stock' },
  { nombre: 'B/W The Eye', imagen: pd10, descripcion: 'Diseño a mano en stock' },
  { nombre: 'The Eye Great Apparel', imagen: pd11, descripcion: 'Diseño a mano en stock' },
  { nombre: 'The Eye Savage green', imagen: pd12, descripcion: 'Diseño a mano en stock' },
  { nombre: 'Calacas meme maestra', imagen: pd13, descripcion: 'Diseño a mano en stock' },
  { nombre: 'Calacas meme ya estuvo', imagen: pd14, descripcion: 'Diseño a mano en stock' },
  { nombre: 'Calacas meme Lopez Obrador', imagen: pd15, descripcion: 'Diseño a mano en stock' },
  { nombre: 'Meme perro minion', imagen: pd16, descripcion: 'Diseño a mano en stock' },
  { nombre: 'Calacas meme mi tortilla', imagen: pd17, descripcion: 'Diseño a mano en stock' },
  { nombre: 'Calacas meme gallo', imagen: pd18, descripcion: 'Diseño a mano en stock' },
  { nombre: 'Meme mamás solteras', imagen: pd19, descripcion: 'Diseño a mano en stock' },
  { nombre: 'Que es esto?', imagen: pd20, descripcion: 'Diseño a mano en stock' },
  { nombre: 'Calacas meme logros', imagen: pd21, descripcion: 'Diseño a mano en stock' },
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