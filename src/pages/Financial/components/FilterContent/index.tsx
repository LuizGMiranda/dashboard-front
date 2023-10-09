import React, { useContext, useRef } from 'react';
import { FilterContext, FilterType } from '../../context/Filter';
import CustomModal from '../../../../components/CustomModal';

interface FilterContentProps {
  show: boolean;
  onClose: () => void;
}

// TODO: filtrar por mes/ano
const FilterContent: React.FC<FilterContentProps> = ({ show, onClose }) => {
  const { filter, setFilter } = useContext(FilterContext);
  const refDate = useRef<HTMLInputElement>(null);
  const refType = useRef<HTMLInputElement>(null);
  const typeItem = filter.type === 'credit' ? 'Crédito' : 'Débito';
  const typeItemColor = filter.type === 'credit' ? 'bg-success' : 'bg-danger';

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data: FilterType = {
      date: refDate.current.value,
      type: refType.current.value === "credit" ? "credit" : "debit",
      showModal: false,
    }
    setFilter(data)
    onClose()
  }

  return (
  <>
    <div>
      {(filter.date || filter.type) && (<span>Filtro: </span>)}
      { filter.date && <span className="badge bg-secondary me-2">{filter.date}</span> }
      { filter.type && <span className={`badge me-2 ${typeItemColor}`}>{typeItem}</span> }
    </div>
    <CustomModal show={show} onClose={onClose} title="Editar Item">
      <form onSubmit={handleSubmit} id="edit-item-form">
        <div className="modal-body">
          <div className="mb-3">
            <label htmlFor="date" className="form-label">Filtrar pelo dia</label>
            <input type="date" className="form-control" id="date" ref={refDate} />
          </div>
          <div className="mb-3">
            <label htmlFor="selectType" className="form-label">Filtrar pelo tipo</label>
            <select id="selectType" className="form-select" aria-label="Filtro de tipo" ref={refType} defaultValue={filter.type}>
              <option value="">Ambos</option>
              <option value="credit">Credito</option>
              <option value="debit">Debito</option>
            </select>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={onClose}>Fechar</button>
          <button type="submit" className="btn btn-primary" form='edit-item-form'>Salvar</button>
        </div>
      </form>
    </CustomModal>
  </>
  );
}

export default FilterContent;