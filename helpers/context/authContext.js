import axios from 'axios';
import { createContext , useEffect, useState ,useRef } from 'react';
import io from 'socket.io-client';



const AuthContext = createContext();

 export const AuthContextProvider = ({children }) => {

    const [userLoggedIn , setUserLoggedIn] = useState(false);
    const [find , setFind] = useState(false);
    const [users ,setUsers] = useState(null);
    const socket = useRef();

    useEffect(() => {
      socket.current = io("ws://dreamweb.runflare.run")
     } , []);
 
    useEffect(() => {
       socket.current.on("getOnlineUsers" , OnlineUsers => {
          setUsers(OnlineUsers)
       })
     },[]);

    async function getUserLoggedIn() {
      try{
        const usersloggedIn = await axios.get("http://dreamweb.runflare.run/authentication/loggedIn",{withCredentials:true});
        setUserLoggedIn(usersloggedIn.data);  
      } catch(err){}
    }

async function getUserinfo() {
  try{
  const usersloggedIn = await axios.get("http://dreamweb.runflare.run/authentication/findUser",{withCredentials:true});
  setFind(usersloggedIn.data);  
  }
  catch(err){}
}

useEffect(() => {
  async function getSession() {
    try{
     await axios.get("http://dreamweb.runflare.run/session",{withCredentials:true});
    } catch(err){}
    }
getSession();
},[]);
useEffect(() => {
  getUserLoggedIn()
},[]);

useEffect(() => {
  getUserinfo()
},[]);




    return(
    <AuthContext.Provider value={{ userLoggedIn ,getUserLoggedIn ,find ,users}} >
       {children}
    </AuthContext.Provider>
    ) 

}

export default AuthContext;


