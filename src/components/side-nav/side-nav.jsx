import logo from "../../assets/icons/logo (1).svg";
import home from "../../assets/icons/home-color.svg";
import musicLibrary from "../../assets/icons/music-library-2.svg";
import radio from "../../assets/icons/radio.svg";
import video from "../../assets/icons/video-horizontal.svg";
import profile from "../../assets/icons/frame.svg";
import logout from "../../assets/icons/Logout.svg";

import { Link, useLocation } from "react-router-dom";
import useMusicallStore from "../../store/musicallStore";
import { handleClearLocalStorage } from "../../utilities/useFetch";

const SideNav = () => {
  const albumId = useMusicallStore((state) => state.albumId);
  const setUserLoggedIn = useMusicallStore((state) => state.setUserLoggedIn);
  const userPath = useMusicallStore((state) => state.userPath);

  const CustomIcon = ({ iconn, to, onClick }) => {
    const newto = to?.split("/")?.at(0);
    const location = useLocation();
    const currentPath = location.pathname.split("/")?.[1];

    return (
      <Link to={to ? to : "#"} className="m-2" onClick={onClick}>
        <img
          src={iconn}
          alt=""
          className={`p-2 ${
            currentPath === newto && "border border-sandy rounded-full"
          }`}
        />
      </Link>
    );
  };

  return (
    <div className="side-nav w-[120px] hidden md:flex flex-col items-center mr-2 mt-5 ">
      <Link to="/" className="side-nav_logo  mb-10">
        <img src={logo} alt="" />
      </Link>
      <div className="side-nav_links">
        <div className="side-nav_top mb-6 flex flex-col items-center justify-center bg-black rounded-full py-5 px-1">
          <CustomIcon iconn={home} to={"/"} />
          <CustomIcon iconn={musicLibrary} to={`album/${albumId}`} />
          <CustomIcon iconn={radio} to={"playlists"} />
          <CustomIcon iconn={video} to={"artists"} />
        </div>
        <div className="side-nav_down flex flex-col items-center justify-center bg-black rounded-full py-5 px-1">
          {/*check zustand user value if user is logged in */}
          <CustomIcon iconn={profile} to={`${userPath}`} />
          <CustomIcon
            iconn={logout}
            onClick={() => {
              handleClearLocalStorage();
              setUserLoggedIn(false);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SideNav;
