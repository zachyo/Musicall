import { Outlet } from "react-router-dom";
import MobileNav from "../../components/mobile-nav/mobile-nav";
// import { useState } from "react";
import PlayerControl from "../../components/player-control/player-control";
import SearchBar from "../../components/search-bar/search-bar";
import SideNav from "../../components/side-nav/side-nav";
import { ControlsContextProvider } from "../../contexts/controlsContext";
import { NowPlayingContextProvider } from "../../contexts/nowPlayingContext";
import { SearchProvider } from "../../contexts/searchContext";
import { TimeVolumeProvider } from "../../contexts/time-volume.context";
import { UserProvider } from "../../contexts/userContext";
import useMusicallStore from "../../store/musicallStore";
import logo from "../../assets/icons/logo (1).svg";

import "./overview.scss";
const Overview = ({ chartB }) => {
  // const [searchKey, setSearchKey] = useState(undefined);
  // const setSearch = () => setSearchKey(searchKey);
  // console.log(searchKey);
  // const {val} = useLocation()
  // console.log(val)
  const currentTracklist = useMusicallStore((state) => state.currentTracklist);
  const setShowNav = useMusicallStore((state) => state.setShowNav )

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
                <div className="flex justify-around md:justify-center">
                  <SideNav />
                  <MobileNav />

                  <div className="overview-container">
                    <div className="flex p-3">
                      <img src={logo} alt="" className="block md:hidden" onClick={()=>setShowNav('')}/>
                      <SearchBar/>
                    </div>

                    <div
                      className="overview-replaceable mt-0
                     md:mt-[40px]"
                    >
                      <Outlet />
                    </div>
                  </div>
                </div>
                {/* <PlayerControl tracks={tracksData.tracks.data} /> */}
                <PlayerControl tracks={currentTracklist} />
              </div>
            </SearchProvider>
          </TimeVolumeProvider>
        </NowPlayingContextProvider>
      </ControlsContextProvider>
    </UserProvider>
  );
};

export default Overview;
