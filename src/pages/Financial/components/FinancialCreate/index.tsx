import React, { useContext } from 'react';
import { useForm } from "react-hook-form"
import CustomModal from '../../../../components/CustomModal';
import { FinancialType } from '../../../../common/types/Financial';
import { ToastContext } from '../../../../context/Toast';
import { ToastType } from '../../../../common/types/Toast';
import { FinancialCreditsService } from '../../../../services/financial/credits';

interface FinancialCreateProps {
  onClose: () => void;
}

interface FinancialCreateForm extends FinancialType {
  isService: boolean;
}

const FinancialCreate: React.FC<FinancialCreateProps> = ({ onClose }) => {
  const { showToast } = useContext(ToastContext)
  const {
    register,
    handleSubmit,
  } = useForm<FinancialCreateForm>();

  async function onSubmit(data) {
    try {
      await FinancialCreditsService.createTransaction(data);
      showToast("Item adicionado com sucesso", ToastType.SUCCESS)
      setTimeout(() => window.location.reload(), 1000 * 1);
    } catch (error) {
      console.error(error);
      showToast("Ocorreu um erro inesperado", ToastType.ERROR)
    }
  }

  return (
    <CustomModal show title='Adicionar Item' onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="modal-body">
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Descricao</label>
            <input
              type="text"
              className="form-control"
              id="description"
              placeholder="Descricao da conta"
              {...register("description", { required: true })}
            />
          </div>
  
          <div className="mb-3">
            <label htmlFor="type" className="form-label">Tipo</label>
            <select id="type" className="form-select" {...register("type", { required: true })}>
              <option value="credit">Credito</option>
              <option value="debit">Debito</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="transactionDate" className="form-label">Data do lancamento</label>
            <input
              type="date"
              className="form-control"
              id="transactionDate"
              {...register("transactionDate", { required: true })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="paymentDate" className="form-label">Data do pagamento</label>
            <input
              type="date"
              className="form-control"
              id="paymentDate"
              {...register("paymentDate")}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="amount" className="form-label">Valor</label>
            <input
              type="number"
              className="form-control"
              id="amount"
              placeholder="0.000,00"
              {...register("amount", { required: true })}
            />
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={onClose}>Fechar</button>
          <button type="submit" className="btn btn-primary">Salvar</button>
        </div>
      </form>
    </CustomModal>
  );
}

export default FinancialCreate;