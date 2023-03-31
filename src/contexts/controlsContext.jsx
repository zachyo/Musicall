import { createContext, useState } from "react";

const ControlsContext = createContext();

export const ControlsContextProvider = ({ children }) => {

  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState(false);
  
  const handleShuffle = () => {
    setShuffle((prev) => !prev);
  };
  const handleRepeat = () => {
    setRepeat((prev) => !prev);
  };
  
  return (
    <ControlsContext.Provider
      value={{
        shuffle,
        repeat,
        handleShuffle,
        handleRepeat,
      }}
    >
      {children}
    </ControlsContext.Provider>
  );
};

export default ControlsContext;
