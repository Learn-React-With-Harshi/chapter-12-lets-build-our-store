import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Admin",
    email: "admin@instafood.com",
    isAuthenticated : false
  }
});

UserContext.displayName = "UserContext";



export default UserContext;