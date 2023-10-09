import React from 'react';
import { FinancialType }  from '../../../../common/types/Financial';

const FinancialItem: React.FC = ({ type, amount, description, transactionDate, createdAt, paymentDate }: FinancialType) => {
  const typeItem = type === 'credit' ? 'Crédito' : 'Débito';
  const typeItemColor = type === 'credit' ? 'bg-success' : 'bg-danger';
  const borderCard = type === 'credit' ? 'border-success' : 'border-danger';
  const backgorungCard = type === 'credit' ? 'bg-success-subtle' : 'bg-danger-subtle';
  const transactionDateFormat = new Date(transactionDate).toLocaleDateString('pt-BR');
  const createdAtDateFormat = new Date(createdAt.seconds*1000).toLocaleDateString('pt-BR');
  const paymentDateFormat = new Date(paymentDate).toLocaleDateString('pt-BR');
  const isNotPay = paymentDate === '';

  return (
    <>
    <div className={`card m-2 shadow ${borderCard}`}>
      <div className={`card-body ${backgorungCard}`}>
        <h3 className="card-title">
          { isNotPay && <span className='badge bg-info me-2'>EM ABERTO</span> }
          <span className={`badge ${typeItemColor} me-2`}>{typeItem}</span>
          {description}
        </h3>
        <div className="flex flex-row">
          <p className='mb-0'>Valor: R${amount}</p>
          <p className='mb-0'>Aberto em: {transactionDateFormat}</p>
          <p>Pago em: {isNotPay ? '-' : paymentDateFormat}</p>
          <button
            className="btn btn-primary"
            data-bs-target="#exampleModal"
            // onClick={() => editItem(id, true)}
            >
              Editar
            </button>
            <p className='text-sm-end m-0'><small>Criado em: {createdAtDateFormat}</small></p>
        </div>
      </div>
    </div>
  </>
  );
}

export default FinancialItem;