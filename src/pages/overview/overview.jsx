import { Outlet} from "react-router-dom";
// import { useState } from "react";
import PlayerControl from "../../components/player-control/player-control";
import SearchBar from "../../components/search-bar/search-bar";
import SideNav from "../../components/side-nav/side-nav";
import { NowPlayingContextProvider } from "../../contexts/nowPlayingContext";
import { SearchProvider } from "../../contexts/searchContext";

import './overview.scss'
const Overview = ({chartB}) => {
  // const [searchKey, setSearchKey] = useState(undefined);
  // const setSearch = () => setSearchKey(searchKey);
  // console.log(searchKey);
  // const {val} = useLocation()
  // console.log(val)

  return (
    <NowPlayingContextProvider>
      <SearchProvider>
        <div
          className="overview"
          // style={{ backgroundImage: `url(${chartB})` }}
        >
          <div className="flex">
            <SideNav />

            <div className="overview-container">
              <SearchBar />

              <div className="overview-replaceable" style={{marginTop : '40px'}}>
                <Outlet />
              </div>
            </div>
          </div>
          <PlayerControl />
        </div>
      </SearchProvider>
    </NowPlayingContextProvider>
  );
};

export default Overview;
