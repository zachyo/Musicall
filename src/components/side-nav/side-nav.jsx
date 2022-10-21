import logo from '../../assets/icons/logo (1).svg'
import home from '../../assets/icons/home-color.svg'
import musicLibrary from '../../assets/icons/music-library-2.svg'
import radio from '../../assets/icons/radio.svg'
import video from '../../assets/icons/video-horizontal.svg'
import profile from '../../assets/icons/frame.svg'
import logout from '../../assets/icons/Logout.svg'

import {Link} from 'react-router-dom'

const SideNav = () => {

    const CustomIcon = ({iconn}) => {
        return (
          <Link to="#" className='m-4'>
            <img src={iconn} alt="" className="" />
          </Link>
        );
    }
  return (
    <div className="side-nav w-1/12  flex flex-col items-center mr-2 mt-5">
      <div className="side-nav_logo  mb-12">
        <img src={logo} alt="" />
      </div>
      <div className="side-nav_links">
        <div className="side-nav_top mb-6 flex flex-col items-center justify-center bg-black rounded-full py-5 px-1">
          <CustomIcon iconn={home} />
          <CustomIcon iconn={musicLibrary} />
          <CustomIcon iconn={radio} />
          <CustomIcon iconn={video} />
        </div>
        <div className="side-nav_down flex flex-col items-center justify-center bg-black rounded-full py-5 px-1">
          <CustomIcon iconn={profile} />
          <CustomIcon iconn={logout} />
        </div>
      </div>
    </div>
  );
};

export default SideNav;
