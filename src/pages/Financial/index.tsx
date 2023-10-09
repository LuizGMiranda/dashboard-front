import React, { useContext, useEffect, useState } from 'react';
import WrapperPage from '../../components/WrapperPage';
import { FinancialType } from '../../common/types/Financial';
import { ToastContext } from '../../context/Toast';
import { ToastType } from '../../common/types/Toast';
import { FinancialCreditsService } from '../../services/financial/credits';
import FinancialItem from './components/FinancialItem';
import { FilterContext } from './context/Filter';
import FilterContent from './components/FilterContent';
import FinancialCreate from './components/FinancialCreate';

const Financial: React.FC = () => {
  const [data, setData] = useState<FinancialType[]>([]);
  const [showModalFilter, setShowModalFilter] = useState(false);
  const [showAddTransaction, setShowAddTransaction] = useState(false);
  const { showToast } = useContext(ToastContext)
  const { filter } = useContext(FilterContext);

  useEffect(() => {
    async function fecth() {
      try {
        if (filter.date || filter.type) {
          console.log('filter', { filter })
          const response = await FinancialCreditsService.getTransactionsByFilter(filter);
          setData(response);
        } else {
          const response = await FinancialCreditsService.getCredits();
          setData(response);
        }
      } catch (error) {
        console.error(error);
        showToast("Ocorreu um erro inesperado", ToastType.ERROR)
      }
    }

    fecth();

    return () => {
      setData([]);
    };
  }, [filter]);

  return (
    <WrapperPage>
      <h1>Financeiro</h1>
      <div>
        <button className="btn btn-success me-2" onClick={() => setShowAddTransaction(true)}>Novo</button>
        <button className="btn btn-info" onClick={() => setShowModalFilter(true)}>Filtrar</button>
        <p>
          Saldo: R$ {data.reduce((acc, item) => {
            if (item.type === 'credit') {
              return acc + parseInt(item.amount);
            }
            return acc - parseInt(item.amount);
          }, 0)}
        </p>
      </div>
      <FilterContent show={showModalFilter} onClose={() => setShowModalFilter(false)} />
      {showAddTransaction && <FinancialCreate onClose={() => setShowAddTransaction(false)} />}
      {
        data.map((item) => (<FinancialItem key={item.id} {...item} />))
      }
    </WrapperPage>
  )
}

export default Financial;