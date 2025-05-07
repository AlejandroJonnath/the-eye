import './styles/Products.css';

export default function Products() {
  const productos = [
    { nombre: 'Camiseta Negra', imagen: '/assets/camiseta1.jpg', descripcion: 'Diseño a mano en stock' },
    { nombre: 'Camiseta Blanca', imagen: '/assets/camiseta2.jpg', descripcion: 'Diseño exclusivo no entregado' },
    { nombre: 'Camiseta Gris', imagen: '/assets/camiseta3.jpg', descripcion: 'Pendiente por cliente, ahora en venta' },
  ];

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
