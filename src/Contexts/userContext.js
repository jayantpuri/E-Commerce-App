import { createContext, useState, useEffect } from "react";
import { addUsers, userAuthState } from "../Utils/firebase.utils";

export const userContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = userAuthState((user) => {
      if (user) {
        addUsers(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);
  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};

export default UserProvider;
