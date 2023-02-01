import { createContext, useState } from "react";

export const UserContext = createContext({
  user: {
    name: "Admin",
    email: "admin@instafood.com",
    isAuthenticated : false
  }
});

UserContext.displayName = "UserContext";



export default function UserContextProvider({children}){
  const [user, setUser] = useState({
    name: "",
    email: "",
    isAuthenticated : false
  })

  return(
    <UserContext.Provider value={{user : user, setUser : setUser}}>
      {children}
    </UserContext.Provider>
  )
}