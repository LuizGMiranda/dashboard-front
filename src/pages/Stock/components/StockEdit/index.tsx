import React, { useRef, useContext } from 'react';
import { Stock } from '../../../../common/types/Stock';
import { StockServie } from '../../../../services/stock';
import { ToastContext } from '../../../../context/Toast';
import { ToastType } from '../../../../common/types/Toast';
import CustomModal from '../../../../components/CustomModal';

interface StockEditProps {
  stock: Stock;
  handleOnClose: () => void;
}

const StockEdit: React.FC<StockEditProps> = ({stock, handleOnClose}) => {
  const refTitle = useRef<HTMLInputElement>(null);
  const refDescription = useRef<HTMLInputElement>(null);
  const refUnit = useRef<HTMLInputElement>(null);
  const refAmount = useRef<HTMLInputElement>(null);
  const { showToast } = useContext(ToastContext)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = {
      title: refTitle.current?.value,
      description: refDescription.current?.value,
      unit: refUnit.current?.value,
      amount: refAmount.current?.value,
    }

    for (const key in form) {
      if (form[key] === "") {
        delete form[key];
      }
    }

    try {
      await StockServie.updateStockById(stock.id, form);
      window.location.reload();
    } catch (error) {
      console.error(error);
      showToast("Ocorreu ao atualizar", ToastType.ERROR)
    }

  }

  async function handleDelete() {
    try {
      await StockServie.deleteStockById(stock.id);
      window.location.reload();
    } catch (error) {
      console.error(error);
      showToast("Ocorreu erro ao deletar", ToastType.ERROR)
    }
  }

  return (
    <CustomModal show title='Editar Item' onClose={handleOnClose}>
      <form onSubmit={handleSubmit} id="edit-item-form">
        <div className="modal-body">
        <input className="form-control m-1" type="text" placeholder={stock.title} ref={refTitle} />
        <input className="form-control m-1" type="text" placeholder={stock.description} ref={refDescription} />
        <input className="form-control m-1" type="text" placeholder={stock.unit} ref={refUnit} />
        <input className="form-control m-1" type="number" placeholder={stock.amount.toString()} ref={refAmount} />
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleOnClose}>Fechar</button>
          <button type="button" className="btn btn-danger" form='edit-item-form' onClick={handleDelete}>Excluir</button>
          <button type="submit" className="btn btn-primary" form='edit-item-form'>Salvar</button>
        </div>
      </form>
    </CustomModal>
  );
}

export default StockEdit;