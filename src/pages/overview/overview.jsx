import { Outlet } from "react-router-dom";
import { useState } from "react";
import PlayerControl from "../../components/player-control/player-control";
import SearchBar from "../../components/search-bar/search-bar";
import SideNav from "../../components/side-nav/side-nav";
import SearchContext from "../../contexts/searchContext";


const Overview = () => {
  const [searchKey, setSearchKey] = useState(undefined);
  const setSearch = () => setSearchKey(searchKey)
  console.log(searchKey);

  return (
    <div className="overview">
      <div className="flex">
        <SearchContext.Provider value={{ searchKey, setSearch }}>
          <SideNav />
        </SearchContext.Provider>

        <div className="overview-container">
          <SearchBar />
          <div className="overview-replaceable">
            <Outlet />
          </div>
        </div>
      </div>
      <PlayerControl />
    </div>
  );
};

export default Overview;
