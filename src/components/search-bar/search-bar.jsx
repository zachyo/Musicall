import search from "../../assets/icons/search.svg";

const SearchBar = () => {
  return (
    <div className="search-bar flex px-6 my-4 space-x-5">
      <img src={search} alt="" />
      <input type="text" placeholder="Search artists" className="bg-dark2 w-full text-light p-2 " />
    </div>
  );
};

export default SearchBar;
