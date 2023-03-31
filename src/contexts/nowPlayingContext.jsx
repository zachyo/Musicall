import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import useMusicallStore from "../store/musicallStore";
import { tracksData } from "../utilities/tracksData";

const NowPlayingContext = createContext();

export const NowPlayingContextProvider = ({ children }) => {
  const [nowPlaying, setNowPlaying] = useState(tracksData.tracks.data[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songIndex, setSongIndex] = useState(0);
  const userLoggedIn = useMusicallStore((state) => state.userLoggedIn);
  const navigate = useNavigate();

  const handleNowPlaying = (song, i) => {
    /*
    check zustand if user is logged in
    if yes, continue
    if no, break and navigate to login page
    */
    if (!userLoggedIn) {
      setIsPlaying(false);
      navigate("/signin");
    } else {
      if (song.title === nowPlaying.title) {
        setIsPlaying((prev) => !prev);
      } else {
        setNowPlaying(song);
        setIsPlaying(true);
        setSongIndex(i);
      }
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
