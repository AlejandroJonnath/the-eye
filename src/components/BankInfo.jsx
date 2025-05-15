import '../styles/BankInfo.css';

export default function BankInfo({ onClose }) {
  // poner la información de la cuenta bancaria aquí, o importarla de un archivo JSON o JS
  // o de una API. Aquí se pone un ejemplo de cómo podría ser la información
  const account = {
    banco: 'Cuenta de Ahorros',
    titular: 'Edison Proaño',
    numeroCuenta: '2209941918',
    cedula: '1720031549',
  };

  return (
    <div className="bank-modal-overlay" onClick={onClose}>
      <div className="bank-modal" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        <h2>Información Bancaria</h2>
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