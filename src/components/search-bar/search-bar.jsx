import { useContext } from "react";
import search from "../../assets/icons/search.svg";
import SearchContext from "../../contexts/searchContext";

const SearchBar = () => {
  const { handleChange } = useContext(SearchContext);

  return (
    <div className="search-bar flex px-6 my-4 mb-0 md:my-4 space-x-5">
      <img src={search} alt="" />
      <input
        type="text"
        placeholder="Search artists..."
        onChange={handleChange}
        className=" w-full text-light p-2 bg-transparent border-none focus:border-none focus:border-b"
      />
    </div>
  );
};

export default SearchBar;
