import { Outlet } from "react-router-dom";
// import { useState } from "react";
import PlayerControl from "../../components/player-control/player-control";
import SearchBar from "../../components/search-bar/search-bar";
import SideNav from "../../components/side-nav/side-nav";
import { ControlsContextProvider } from "../../contexts/controlsContext";
import { NowPlayingContextProvider } from "../../contexts/nowPlayingContext";
import { SearchProvider } from "../../contexts/searchContext";
import { TimeVolumeProvider } from "../../contexts/time-volume.context";
import { UserProvider } from "../../contexts/userContext";
import { tracksData } from "../../utilities/tracksData";

import "./overview.scss";
const Overview = ({ chartB }) => {
  // const [searchKey, setSearchKey] = useState(undefined);
  // const setSearch = () => setSearchKey(searchKey);
  // console.log(searchKey);
  // const {val} = useLocation()
  // console.log(val)

  return (
    <UserProvider>
      <ControlsContextProvider>
        <NowPlayingContextProvider>
          <TimeVolumeProvider>
            <SearchProvider>
              <div
                className="overview"
                // style={{ backgroundImage: `url(${chartB})` }}
              >
                <div className="flex">
                  <SideNav />

                  <div className="overview-container">
                    <SearchBar />

                    <div
                      className="overview-replaceable"
                      style={{ marginTop: "40px" }}
                    >
                      <Outlet />
                    </div>
                  </div>
                </div>
                <PlayerControl tracks={tracksData.tracks.data} />
              </div>
            </SearchProvider>
          </TimeVolumeProvider>
        </NowPlayingContextProvider>
      </ControlsContextProvider>
    </UserProvider>
  );
};

export default Overview;
