import React, { useState, useEffect, useContext } from 'react';
import WrapperPage from '../../components/WrapperPage';
import { StockServie } from '../../services/stock';
import { Stock as StockType } from '../../common/types/Stock';
import StockItem from './components/StockItem';
import StockEdit from './components/StockEdit';
import { ToastContext } from '../../context/Toast';
import { ToastType } from '../../common/types/Toast';

const Stock: React.FC = () => {
  const [data, setData] = useState<StockType[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [stockData, setStockData] = useState<StockType>({} as StockType);
  const { showToast } = useContext(ToastContext)

  useEffect(() => {
    async function fecth() {
      try {
        const response = await StockServie.getStocks();
        setData(response);
      } catch (error) {
        console.error(error);
        showToast("Ocorreu um erro inesperado", ToastType.ERROR)
      }
    }

    fecth();

    return () => {
      setData([]);
    };
  }, []);

  function editItem(id: string, open: boolean): void {
    console.log(id, open)
    setOpenModal(open);
    const item = data.find((item) => item.id === id);
    console.log(item)
    setStockData(item);
  }

  function closeModal(): void {
    setOpenModal(false);
    setStockData({} as StockType);
  }

  return (
    <WrapperPage>
        <h1>Estoque</h1>
        {data.map((item) => (item.show && <StockItem key={item.id} {...item} editItem={editItem} />))}
        {
          openModal && (<StockEdit stock={stockData} handleOnClose={closeModal}/>)
        }
    </WrapperPage>
  );
}

export default Stock;