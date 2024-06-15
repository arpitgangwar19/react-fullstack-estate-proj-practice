import { createContext, useEffect, useState,useContext } from "react";
import {io} from "socket.io-client"
import { userContext } from "./UserContext";

const SocketContext = createContext(null);

const SocketContextProvider = ({ children }) => {
    const currentUser = userContext();
  const [socket, setSocket] = useState(null);
 
  useEffect(() => {
    setSocket(io("http://localhost:4000"));
    console.log("socket"+ socket?.id);
  }, []);

  useEffect(() => {
   console.log(currentUser?.currentUser?.data?.id);
   
    currentUser && socket?.emit("newUser", currentUser?.currentUser?.data?.id);
    }, [currentUser, socket]);
  
  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};
const socketContext = () => useContext(SocketContext);

export { SocketContextProvider, socketContext};
