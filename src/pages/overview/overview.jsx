import { Outlet } from "react-router-dom";
// import { useState } from "react";
import PlayerControl from "../../components/player-control/player-control";
import SearchBar from "../../components/search-bar/search-bar";
import SideNav from "../../components/side-nav/side-nav";
import { SearchProvider } from "../../contexts/searchContext";

const Overview = () => {
  // const [searchKey, setSearchKey] = useState(undefined);
  // const setSearch = () => setSearchKey(searchKey);
  // console.log(searchKey);

  return (
    <SearchProvider>
      <div className="overview">
        <div className="flex">
          <SideNav />

          <div className="overview-container">
            <SearchBar />

            <div className="overview-replaceable">
              <Outlet />
            </div>
          </div>
        </div>
        <PlayerControl />
      </div>
    </SearchProvider>
  );
};

export default Overview;
