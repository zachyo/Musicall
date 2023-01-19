import { createContext, useState } from "react";
import R14 from "../assets/images/Rectangle14.png";


const NowPlayingContext = createContext();

export const NowPlayingContextProvider = ({ children }) => {
  const [nowPlaying, setNowPlaying] = useState({
    id: 1,
    title: "Life in a circle",
    img: R14,
  });
  //   console.log(nowPlaying)
  //searching system
  const handleClick = (song) => {
    setNowPlaying(song);
  };
  return (
    <NowPlayingContext.Provider value={{ nowPlaying, handleClick }}>
      {children}
    </NowPlayingContext.Provider>
  );
};

export default NowPlayingContext;
