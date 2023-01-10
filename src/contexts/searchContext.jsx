import { useState } from "react";
import { createContext } from "react";

export const SearchContext = createContext({
  searchKey: undefined,
  setSearchKey : () => {}
});

const SearchProvider = ({ children }) => {
  const [searchKey, setSearchKey] = useState();

  return <SearchContext.Provider value={{searchKey, setSearchKey}}>{children}</SearchContext.Provider>;
};

export default SearchProvider;

