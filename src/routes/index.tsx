import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom";
import Home from "../pages/Home";
import Stock from "../pages/Stock";
import Financial from "../pages/Financial";
import { FilterProvider } from "../pages/Financial/context/Filter";

const PageFinancial = () => <FilterProvider><Financial /></FilterProvider>;
  
const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route index element={<Home />} />
            <Route path="stock" element={<Stock />} />
            <Route path="financial" element={<PageFinancial />} />
        </Route>
    )
);

export default routes;
