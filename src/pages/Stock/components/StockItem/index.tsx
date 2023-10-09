import React from 'react';
import { Stock } from '../../../../common/types/Stock';

interface StockItemProps extends Stock {
  editItem: (id: string, open: boolean) => void;
}

const StockItem: React.FC<StockItemProps> = ({ id, title, description, unit, amount, editItem}: StockItemProps) => {
  return (
    <>
      <div className={`card m-2 shadow ${amount || 'border-danger'}`}>
        <div className="card-body">
          <h5 className="card-title">
            {!amount.length && <span className='badge bg-danger me-2'>Sem estoque</span>}
            {title}
          </h5>
          <div className="flex flex-row gap-2">
            <p>{description}</p>
            <p>{amount}/{unit}</p>
            <button
              className="btn btn-primary"
              data-bs-target="#exampleModal"
              onClick={() => editItem(id, true)}
              >
                Editar
              </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default StockItem;