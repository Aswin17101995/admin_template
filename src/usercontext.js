import React, { useState } from "react";

let UserContext = React.createContext();

export default UserContext;

export const UserProvider = ({children})=>{
    let [userlist,setuser] =useState([])
   return <UserContext.Provider value={{username:"jana",age:20,userlist,setuser}}>
       {children}
   </UserContext.Provider>
}