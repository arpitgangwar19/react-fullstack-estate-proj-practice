import { createContext, useEffect, useState,useContext } from "react";

const UserContext = createContext(null);

const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user-details") || null)
  );

  const updateUser = (data) => {
    setCurrentUser(data);
  };
  useEffect(() => {
    localStorage.setItem("user-details", JSON.stringify(currentUser));
  }, [currentUser]);
  return (
    <UserContext.Provider value={{ currentUser, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
const userContext = () => useContext(UserContext);

export { UserContextProvider, userContext };
