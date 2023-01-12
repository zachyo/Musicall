import { useContext } from "react";
import { useState } from "react";
import search from "../../assets/icons/search.svg";
import SearchContext  from "../../contexts/searchContext";

const SearchBar = () => {
  const { setSearch } = useContext(SearchContext);
  // const [searchKey, setSearchKey] = useState(undefined);

  //searching system
  const handleChange = (event) => {
    console.log(setSearch)
    // setSearch(event.target.value);
  };

  // console.log(searchKey, searchVal);
  return (
    <div className="search-bar flex px-6 my-4 space-x-5">
      <img src={search} alt="" />
      <input
        type="text"
        placeholder="Search artists..."
        // value={searchKey}
        onChange={handleChange}
        className="bg-dark2 w-full text-light p-2"
      />
    </div>
  );
};

export default SearchBar;
