import shuffle from "../../assets/icons/shuffle.svg";
import previous from "../../assets/icons/previous.svg";
import play from "../../assets/icons/Vector (3).svg";
import next from "../../assets/icons/next.svg";
import repeat from "../../assets/icons/repeate-one.svg";
import volume from '../../assets/icons/volume-high.svg'

import './player-control.scss'
import { useContext } from "react";
import NowPlayingContext from "../../contexts/nowPlayingContext";

const PlayerControl = () => {
  const {nowPlaying} = useContext(NowPlayingContext)
  return (
    <div className="player-control flex h-24 bg-black fixed bottom-0 z-10 w-full text-white p-10 items-center justify-around">
      <div className="song-details flex items-center">
        <img src={nowPlaying.img} alt="" className="h-12 mr-4 rounded-xl" />
        <div className="text-left">
          <h1>{nowPlaying.title}</h1>
          <small className="text-lightWhite">James</small>
        </div>
      </div>
      <div className="buttons flex flex-col items-center justify-center space-y-5">
        <div className="flex space-x-14 items-center justify-center">
          <img src={shuffle} alt="shuffle" className="h-6" />
          <img src={previous} alt="previous" className="h-8" />
          <img src={play} alt="play" className="h-8" />
          <img src={next} alt="next" className="h-8" />
          <img src={repeat} alt="repeat" className="h-8" />
        </div>
        <span className="line">u</span>
        {/* <div className="track-length">lj</div> */}
      </div>
      <div className="volume flex items-center justify-center">
        <img src={volume} alt="volume" className="mr-3"/>
        <span className="circle"></span>
        <span className="line">u</span>
      </div>
    </div>
  );
};

export default PlayerControl;
