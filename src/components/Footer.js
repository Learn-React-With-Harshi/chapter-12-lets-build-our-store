import { useContext } from "react";
import  UserContext  from "../utils/UserContext";

export const Footer = () => {
  const {user} = useContext(UserContext);
  return (
    <div className="flex mob:flex-col justify-around w-full shadow h-14 bg-yellow text-blue-dark text-center leading-[3.5rem] bottom-0 fixed z-40">
      <span className="text-left mob:text-xs mob:text-center">Hey  {user.name}....  Thanks for using Insta Food <span className="text-red">&#x2764;</span> </span>
      <span className="text-center mob:text-xs">Developed with <span className="text-red">&#x2764;</span> by Harshitha</span>
    </div>
  )
};
