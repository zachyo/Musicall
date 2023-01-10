import { useContext } from "react";
import { useState } from "react";
import search from "../../assets/icons/search.svg";
import { SearchContext } from "../../contexts/searchContext";

const SearchBar = () => {
  const {searchKeyy, setSearchKeyy} = useContext(SearchContext);
  const [searchKey, setSearchKey] = useState(undefined);

  //searching system
  const handleChange = (event) => {
    setSearchKey(event.target.value);
    setSearchKeyy(event.target.value);
  };

  console.log(searchKey,searchKeyy)
  return (
    <div className="search-bar flex px-6 my-4 space-x-5">
      <img src={search} alt="" />
      <input
        type="text"
        placeholder="Search artists..."
        value={searchKey}
        onChange={handleChange}
        className="bg-dark2 w-full text-light p-2"
      />
    </div>
  );
};

export default SearchBar;
