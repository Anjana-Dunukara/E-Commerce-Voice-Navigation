import { createContext, useContext, useState } from 'react';
import { useCookies } from 'react-cookie';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [cookies, setCookie, removeCookie] = useCookies(['currentUser']);
  const [currentUser, setCurrentUser] = useState(cookies.currentUser || '');

  const values = {
    currentUser,
    setCurrentUser,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export const useUserContext = () => useContext(UserContext);
