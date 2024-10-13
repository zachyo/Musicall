import { useState } from "react";
import { createContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userDoc, setUserDoc] = useState({});


  return (
    <UserContext.Provider
      value={{
        userDoc,
        setUserDoc,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
