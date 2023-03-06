import shuffleIcon from "../../assets/icons/shuffle.svg";
import previous from "../../assets/icons/previous.svg";
import play from "../../assets/icons/Vector (3).svg";
import next from "../../assets/icons/next.svg";
import repeatIcon from "../../assets/icons/repeate-one.svg";

import "./player-control.scss";
import { useContext } from "react";
import NowPlayingContext from "../../contexts/nowPlayingContext";
import ControlsContext from "../../contexts/controlsContext";
import VolumeBar from "../music-player/VolumeBar";
import TimeVolumeContext from "../../contexts/time-volume.context";
import Player from "../music-player/Player";
import Seekbar from "../music-player/Seekbar";
import { BsPause } from "react-icons/bs";

const PlayerControl = ({ tracks }) => {
  const {
    nowPlaying,
    isPlaying,
    handlePlayPause,
    handlePrevSong,
    handleNextSong,
  } = useContext(NowPlayingContext);
  const { shuffle, repeat, handleShuffle, handleRepeat } =
    useContext(ControlsContext);
  const {
    duration,
    appTime,
    volume,
    seekTime,
    setSeekTime,
    setVolume,
    setDuration,
    setAppTime,
  } = useContext(TimeVolumeContext);
  return (
    <div className="player-control flex h-24 bg-black fixed bottom-0 z-10 w-full text-white p-10 items-center justify-around">
      <div className="song-details flex items-center">
        <img
          src={nowPlaying?.album.cover}
          alt=""
          className="h-12 mr-4 rounded-xl"
        />
        <div className="text-left text-lightSteel font-bold">
          <h1>{nowPlaying?.title}</h1>
          <small className="text-sandy truncate font-normal">
            {nowPlaying?.artist.name}
          </small>
        </div>
      </div>
      <div className="buttons flex flex-col items-center justify-center space-y-5">
        <div className="flex w-96 items-center justify-center">
          <img
            src={shuffleIcon}
            alt="shuffle"
            className="h-8"
            onClick={handleShuffle}
            style={
              shuffle
                ? {
                    filter:
                      "invert(24%) sepia(38%) saturate(660%) hue-rotate(351deg) brightness(100%) contrast(97%)",
                  }
                : {}
            }
          />
          <img
            src={previous}
            alt="previous"
            className="h-8"
            onClick={() => {
              handlePrevSong(tracks, shuffle);
            }}
          />
          {isPlaying ? (
            <BsPause
              style={{
                filter:
                  "invert(24%) sepia(38%) saturate(660%) hue-rotate(351deg) brightness(100%) contrast(97%)", transform : 'scale(2.4)', margin:'0 0.4rem' 
              }}
              onClick={handlePlayPause}
              
            />
          ) : (
            <img
              src={play}
              alt="play"
              className="h-8"
              onClick={handlePlayPause}
            />
          )}

          <img
            src={next}
            alt="next"
            className="h-8"
            onClick={() => {
              handleNextSong(tracks, shuffle);
            }}
          />
          <img
            src={repeatIcon}
            alt="repeat"
            className="h-8"
            style={
              repeat
                ? {
                    filter:
                      "invert(24%) sepia(38%) saturate(660%) hue-rotate(351deg) brightness(100%) contrast(97%)",
                  }
                : {}
            }
            onClick={handleRepeat}
          />
        </div>
        <Player
          activeSong={nowPlaying}
          volume={volume}
          isPlaying={isPlaying}
          seekTime={seekTime}
          repeat={repeat}
          // currentIndex={currentIndex}
          onEnded={() => {
            handleNextSong(tracks, shuffle);
          }}
          onTimeUpdate={(event) => setAppTime(event.target.currentTime)}
          onLoadedData={(event) => setDuration(event.target.duration)}
        />
        <Seekbar
          value={appTime}
          min="0"
          max={duration}
          onInput={(event) => setSeekTime(event.target.value)}
          setSeekTime={setSeekTime}
          appTime={appTime}
        />
        {/* <span className="line">u</span> */}
        {/* <div className="track-length">lj</div> */}
      </div>
      {/* //volumebar */}
      <VolumeBar
        value={volume}
        min="0"
        max="1"
        onChange={(event) => setVolume(event.target.value)}
        setVolume={setVolume}
      />
    </div>
  );
};

export default PlayerControl;
