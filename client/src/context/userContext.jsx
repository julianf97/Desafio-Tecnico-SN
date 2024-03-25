import { createContext, useState, } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [userLogged, setUserLogged] = useState(false);
  const [userIdState, setUserIdState] = useState(null)

  return (
    <UserContext.Provider
      value={{
        isAdmin, 
        setIsAdmin,
        userLogged, 
        setUserLogged,
        userIdState,
        setUserIdState
      }}
    >
      {children}
    </UserContext.Provider>
  );
};