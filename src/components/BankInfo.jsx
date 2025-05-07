import '../styles/BankInfo.css';

export default function BankInfo({ onClose }) {
  // poner la información de la cuenta bancaria aquí, o importarla de un archivo JSON o JS
  // o de una API. Aquí se pone un ejemplo de cómo podría ser la información
  const account = {
    banco: 'Banco Ejemplo',
    titular: 'Nombre del Titular',
    iban: 'EC59 1234 5678 9012 3456 7890',
    swift: 'BEJPEC22XXX',
  };

  return (
    <div className="bank-modal-overlay" onClick={onClose}>
      <div className="bank-modal" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        <h2>Información Bancaria</h2>
        <ul>
          <li><strong>Banco:</strong> {account.banco}</li>
          <li><strong>Titular:</strong> {account.titular}</li>
          <li><strong>IBAN:</strong> {account.iban}</li>
          <li><strong>SWIFT:</strong> {account.swift}</li>
        </ul>
      </div>
    </div>
  );
}