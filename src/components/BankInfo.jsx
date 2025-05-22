import '../styles/BankInfo.css';

/**
 * Componente BankInfo
 * Muestra la información bancaria en un modal superpuesto.
 * 
 * Props:
 * - onClose: función que se ejecuta para cerrar el modal.
 */
export default function BankInfo({ onClose }) {
  // Información de la cuenta bancaria (puede ser importada o recibida por props)
  const account = {
    banco: 'Cuenta de Ahorros',        // Tipo de cuenta bancaria
    titular: 'Edison Proaño',          // Nombre del titular de la cuenta
    numeroCuenta: '2209941918',        // Número de cuenta bancaria
    cedula: '1720031549',              // Cédula del titular
  };

  return (
    // Capa de fondo del modal. Al hacer click fuera del modal, se cierra.
    <div className="bank-modal-overlay" onClick={onClose}>
      {/* Contenedor principal del modal. Detiene la propagación del click para no cerrar el modal si se hace click dentro. */}
      <div className="bank-modal" onClick={e => e.stopPropagation()}>
        {/* Botón para cerrar el modal */}
        <button className="close-btn" onClick={onClose}>&times;</button>
        {/* Título del modal */}
        <h2>Información Bancaria</h2>
        {/* Lista con los datos de la cuenta */}
        <ul>
          <li><strong>Tipo de cuenta: </strong> {account.banco}</li>
          <li><strong>Nombre Completo: </strong> {account.titular}</li>
          <li><strong>Número de cuenta: </strong> {account.numeroCuenta}</li>
          <li><strong>Cédula: </strong> {account.cedula}</li>
        </ul>
      </div>
    </div>
  );
}