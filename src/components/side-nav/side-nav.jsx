import logo from '../../assets/icons/logo (1).svg'
import home from '../../assets/icons/home-color.svg'
import musicLibrary from '../../assets/icons/music-library-2.svg'
import radio from '../../assets/icons/radio.svg'
import video from '../../assets/icons/video-horizontal.svg'
import profile from '../../assets/icons/frame.svg'
import logout from '../../assets/icons/Logout.svg'

import {Link} from 'react-router-dom'

const SideNav = () => {

    const CustomIcon = ({iconn,to}) => {
        return (
          <Link to={to ? to : '#'} className='m-4'>
            <img src={iconn} alt="" className="" />
          </Link>
        );
    }
    
  return (
    <div className="side-nav w-1/12 hidden md:flex flex-col items-center mr-2 mt-5 ">
      <Link to="/" className="side-nav_logo  mb-10">
        <img src={logo} alt="" />
      </Link>
      <div className="side-nav_links">
        <div className="side-nav_top mb-6 flex flex-col items-center justify-center bg-black rounded-full py-5 px-1">
          <CustomIcon iconn={home} to={"/"} />
          <CustomIcon iconn={musicLibrary} to={"1/album"} />
          <CustomIcon iconn={radio} to={'playlists'} />
          <CustomIcon iconn={video} to={"artists"} />
        </div>
        <div className="side-nav_down flex flex-col items-center justify-center bg-black rounded-full py-5 px-1">
          {/*check zustand user value if user is logged in */}
          <CustomIcon iconn={profile} to={"/signin"} />
          <CustomIcon iconn={logout} />
        </div>
      </div>
    </div>
  );
};

export default SideNav;
