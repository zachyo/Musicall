import { Outlet, useLocation, useNavigate } from "react-router-dom";
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
import { useEffect } from "react";
const Overview = ({ chartB }) => {
  // const [searchKey, setSearchKey] = useState(undefined);
  // const setSearch = () => setSearchKey(searchKey);
  // console.log(searchKey);
  // const {val} = useLocation()
  // console.log(val)
  const currentTracklist = useMusicallStore((state) => state.currentTracklist);
  const setShowNav = useMusicallStore((state) => state.setShowNav);
  const userLoggedIn = useMusicallStore((state) => state.userLoggedIn);

  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname.split("/")?.[1];

  useEffect(() => {
    if (!userLoggedIn) {
      navigate("/signin");
    }
  }, [userLoggedIn, navigate]);

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
                  <MobileNav />

                  <div className="overview-container w-full lg:w-[calc(100vw-120px)] h-[100vh]">
                    <div className="flex p-3">
                      <img
                        src={logo}
                        alt=""
                        className="block md:hidden"
                        onClick={() => setShowNav("")}
                      />
                      {!["signin"].includes(currentPath) && <SearchBar />}
                    </div>

                    <div className="overview-replaceable mt-0 max-h-[calc(91vh-100px)] overflow-y-scroll">
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
