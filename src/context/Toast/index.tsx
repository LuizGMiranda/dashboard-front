import { createContext, useState } from "react";
import { ToastInterface, ToastType } from "../../common/types/Toast";
import CustomToast from "../../components/CustomToast";

const initialState: ToastInterface = {
  message: "",
  type: ToastType.SUCCESS,
  show: false,
};

interface APIContextInterface {
  showToast: (message: string, type: ToastType, closeTime?: number) => void;
}

export const ToastContext = createContext<APIContextInterface>(undefined);

const ToastProvider = ({children}) => {
  const [toast, setToast] = useState(initialState);

  function showToast(message: string, type: ToastType, closeTime = 3): void {
    setToast({
      message,
      type,
      show: true,
    });

    setTimeout(() => {setToast(initialState)}, 1000 * closeTime);
  }


  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast.show && (<CustomToast message={toast.message} type={toast.type} />)}
    </ToastContext.Provider>
  )
};

export { ToastProvider };

