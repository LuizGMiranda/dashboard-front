import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import './styles/styles.scss'
import routes from './routes';
import { ToastProvider } from './context/Toast';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ToastProvider>
      <RouterProvider router={routes} />
    </ToastProvider>
  </React.StrictMode>,
)
