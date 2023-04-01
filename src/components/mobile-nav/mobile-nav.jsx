import home from "../../assets/icons/home-color.svg";
import musicLibrary from "../../assets/icons/music-library-2.svg";
import radio from "../../assets/icons/radio.svg";
import video from "../../assets/icons/video-horizontal.svg";
import profile from "../../assets/icons/frame.svg";
import logout from "../../assets/icons/Logout.svg";

import { Link, NavLink } from "react-router-dom";
import useMusicallStore from "../../store/musicallStore";

const MobileNav = () => {
  const albumId = useMusicallStore((state) => state.albumId);
  const setUserLoggedIn = useMusicallStore((state) => state.setUserLoggedIn);
  const userPath = useMusicallStore((state) => state.userPath);
  const showNav = useMusicallStore((state) => state.showNav);
  const setShowNav = useMusicallStore((state) => state.setShowNav);

  const CustomIcon = ({ iconn, to, text, onClick }) => {
    return (
      <div onClick={onClick}>
        <NavLink
          to={to ? to : "#"}
          className="m-4 flex space-x-4 hover:cursor-pointer text-navDark"
          onClick={() => {
            setShowNav("hidden");
          }}
          style={({ isActive }) => (isActive ? { color: "#facd66" } : {})}
        >
          <img src={iconn} alt="" className="" />
          <h1 className=" font-bold text-lg">{text}</h1>
        </NavLink>
      </div>
    );
  };
  return (
    <div
      className="mobile-nav block md:hidden w-3/4 h-[100vh] bg-darkAlt fixed top-0 left-0 transition-all z-10"
      style={
        showNav === "hidden"
          ? { transform: "translateX(-100%)" }
          : { transform: "translatex(0)" }
      }
    >
      <div className="mt-16 ">
        <div className="mb-6 flex flex-col py-5 pl-6">
          <h1
            onClick={() => {
              setShowNav("hidden");
            }}
          >
            Close button
          </h1>
          <CustomIcon iconn={home} to={"/home"} text="Home" />
          <CustomIcon
            iconn={musicLibrary}
            to={`album/${albumId}`}
            text="Albums"
          />
          <CustomIcon iconn={radio} to={"playlists"} text="Playlists" />
          <CustomIcon iconn={video} to={"artists"} text="Artists" />
          <CustomIcon
            iconn={profile}
            to={`${userPath}`}
            text={userPath === "signin" ? "Log in" : "Profile"}
          />
          <CustomIcon
            iconn={logout}
            text="Log out"
            to='k'
            onClick={() => setUserLoggedIn(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
