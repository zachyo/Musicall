import { Outlet } from "react-router-dom";
import PlayerControl from "../../components/player-control/player-control";
import SearchBar from "../../components/search-bar/search-bar";
import SideNav from "../../components/side-nav/side-nav";

const Overview = () => {
  return (
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
  );
};

export default Overview;
