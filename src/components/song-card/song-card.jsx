import { useContext } from "react";
import heart from "../../assets/icons/Heart.svg";
import dotted from "../../assets/icons/more-vertical.svg";
import NowPlayingContext from "../../contexts/nowPlayingContext";

import "./song-card.scss";

const SongCard = ({ song, img, title, handleSong }) => {
  const { nowPlaying } = useContext(NowPlayingContext);
  function toSentenceCase(str) {
    return str.toLowerCase().charAt(0).toUpperCase() + str.slice(1);
  }
  const getDuration = (time) =>
    `${Math.floor(time / 60)}:${`0${Math.floor(time % 60)}`.slice(-2)}`;

  return (
    <div
      className="song-card flex items-center justify-between mb-[14px] p-2 px-3 text-light text-xs md:text-base md:mb-[10px]"
      style={nowPlaying.id === song.id ? { color: "#facd66" } : {}}
      onClick={handleSong}
    >
      <div className="flex">
        <div className="flex items-center justify-center space-x-5 mr-3 md:mr-20">
          <img src={img} alt="" className="h-10 w-10 rounded-xl" />
          <img src={heart} alt="" className="hidden md:block" />
        </div>
        <div className="md:hidden">
          <div className="title text-left mb-2">
            {toSentenceCase(song.title)}
          </div>
          <div className="title text-left">{song.artist.name}</div>
        </div>
      </div>

      <div className="hidden md:block title w-1/3 text-left">
        {toSentenceCase(song.title)}
      </div>
      <div className="hidden md:block title w-1/5 text-left">
        {song.artist.name}
      </div>
      <p className="hidden md:block w-1/5">{title}</p>
      <div className="md:hidden">
        <div className="ml-4">
          <img src={dotted} alt="options" />
        </div>
        <p className="mt-1">{getDuration(song.duration)}</p>
      </div>
      <p className="hidden md:block w-1/5">{getDuration(song.duration)}</p>
      <div className="hidden md:block w-[4%]">
        <img src={dotted} alt="options" />
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
