import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const usercontext = createContext({
  user: null,
  setuser: () => {},
  ready: false,
  setready: () => {},
  dp: '',
  setdp: () => {},
  count: 0,
  setcount: () => {},
  isAdmin: false,
  setisAdmin: () => {}
});

export function ContextProvider({children}){
    const [user, setuser] = useState(null);
    const [ready, setready] = useState(false);
    const [dp,setdp] = useState('');
    const [count, setcount] = useState(0);
    const [isAdmin, setisAdmin] = useState(false);

    useEffect(() => {
      axios
        .get('/profile')
        .then(({ data }) => {
          if (data) {
            setuser(data.name);
            setdp(data.profileimage);
            setisAdmin(data.role === 'admin');
          }
        })
        .catch((err) => {
          console.error('Failed to fetch profile:', err);
        })
        .finally(() => {
          setready(true);
        });
    }, []);


    return(
        <usercontext.Provider value={{user,setuser,ready,setready,dp,setdp,count,setcount,isAdmin,setisAdmin}}>
          {children} 
        </usercontext.Provider>
    )
}