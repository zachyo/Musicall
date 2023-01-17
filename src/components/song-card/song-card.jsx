import { useContext } from "react";
import heart from "../../assets/icons/Heart.svg";
import NowPlayingContext from "../../contexts/nowPlayingContext";

import './song-card.scss'

const SongCard = ({ song }) => {
    const { handleClick } = useContext(NowPlayingContext);
  return (
    <div className="song-card flex items-center p-2 px-3 text-light" onClick={()=>handleClick(song)}>
      <div className="flex items-center justify-center space-x-5 mr-20">
        <img src={song.img} alt="" className="h-10 w-10 rounded-xl" />
        <img src={heart} alt="" />
      </div>
      <div className="title w-1/3 text-left">{song.title}</div>
      <div className="title w-1/5 text-left">Artiste</div>
      <p className="w-1/5">Album name</p>
      <p className="w-1/5">Song duration</p>
      <div className="w-1/6">
        <img src="" alt="" />
      </div>
    </div>
    // <div>
    //   <tr className="song-card w-full flex items-center p-2 px-3 text-light">
    //     <td className="flex items-center justify-center space-x-5 mr-20">
    //       <img src={song.img} alt="" className="h-10 w-10 rounded-xl" />
    //       <img src={heart} alt="" />
    //     </td>
    //     <td className="w-2/5 text-left">{song.title} | Artiste</td>
    //     <td className="w-24">Album name</td>
    //     <p>Song duration</p>
    //     <img src="" alt="" />
    //     <td></td>
    //   </tr>
    // </div>
  );
};

export default SongCard;
