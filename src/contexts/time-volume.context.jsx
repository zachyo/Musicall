import { useState } from "react";
import { createContext } from "react";

const TimeVolumeContext = createContext();

export const TimeVolumeProvider = ({ children }) => {
  const [duration, setDuration] = useState(0);
  const [seekTime, setSeekTime] = useState(0);
  const [appTime, setAppTime] = useState(0);
  const [volume, setVolume] = useState(0.3);

  return (
    <TimeVolumeContext.Provider value={{ duration, seekTime, appTime, volume, setVolume, setAppTime, setDuration, setSeekTime }}>
      {children}
    </TimeVolumeContext.Provider>
  );
};

// {
//   searchVal: undefined,
//   setsearchVal: () => {},
// }

export default TimeVolumeContext;
