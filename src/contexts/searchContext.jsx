import { useState } from "react";
import { createContext } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchKey, setSearchKey] = useState();
  //searching system
  const handleChange = (event) => {
    setSearchKey(event.target.value);
  };
  return (
    <SearchContext.Provider value={{ searchKey, handleChange }}>
      {children}
    </SearchContext.Provider>
  );
};

// {
//   searchVal: undefined,
//   setsearchVal: () => {},
// }

export default SearchContext;

