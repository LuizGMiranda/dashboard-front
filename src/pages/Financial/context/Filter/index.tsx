import { createContext, useState } from "react";

export type FilterType = {
  date: string;
  type: "credit" | "debit" | "";
  showModal: boolean;
};

const initialState: FilterType = {
  date: "",
  type: "",
  showModal: false,
};

interface APIContextInterface {
  setFilter: (filter: FilterType) => void;
  filter: FilterType;
}

export const FilterContext = createContext<APIContextInterface>(undefined);

const FilterProvider = ({children}) => {
  const [filter, setFilter] = useState(initialState);

  return (
    <FilterContext.Provider value={{ setFilter, filter }}>
      {children}
    </FilterContext.Provider>
  )
};

export { FilterProvider };

