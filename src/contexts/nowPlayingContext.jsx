import { createContext, useContext, useState } from "react";
import R14 from "../assets/images/Rectangle14.png";
import ControlsContext from "./controlsContext";

const NowPlayingContext = createContext();

export const NowPlayingContextProvider = ({ children }) => {
  const [nowPlaying, setNowPlaying] = useState({
    id: 1,
    title: "Life in a circle",
    artist: { name: "James" },
    album : {cover : R14}
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const [songIndex, setSongIndex] = useState(0);

  const handleNowPlaying = (song, i) => {
    if (song.title === nowPlaying.title) {
      setIsPlaying((prev) => !prev);
    } else {
      setNowPlaying(song);
      setIsPlaying(true);
      setSongIndex(i);
    }
  };
  const handlePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };
  const handlePrevSong = (tracks, shuffle) => {
    if (songIndex === 0) {
      handleNowPlaying(tracks[tracks.length - 1], tracks.length - 1);
    } else if (shuffle) {
      const num = Math.floor(Math.random() * tracks.length);
      handleNowPlaying(tracks[num], num);
    } else {
      handleNowPlaying(tracks[songIndex - 1], songIndex - 1);
    }
  };

  const handleNextSong = (tracks, shuffle) => {
    if (songIndex === tracks.length - 1) {
      handleNowPlaying(tracks[0], 0);
    } else if (shuffle) {
      const num = Math.floor(Math.random() * tracks.length);
      handleNowPlaying(tracks[num], num);
    } else {
      handleNowPlaying(tracks[songIndex + 1], songIndex + 1);
    }
  };
  return (
    <NowPlayingContext.Provider
      value={{
        nowPlaying,
        isPlaying,
        handleNowPlaying,
        handlePlayPause,
        handlePrevSong,
        handleNextSong,
      }}
    >
      {children}
    </NowPlayingContext.Provider>
  );
};

export default NowPlayingContext;
