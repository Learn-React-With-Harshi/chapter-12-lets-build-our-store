import { useContext } from "react";
import { UserContext } from "../utils/UserContext";

export const Footer = () => {
  const {user} = useContext(UserContext);
  return (
    <div className="flex justify-around w-full shadow h-14 bg-yellow text-blue-dark text-center leading-[3.5rem]">
      <span className="text-left">Hey  {user.name}....  Thanks for using Insta Food <span className="text-red">&#x2764;</span> </span>
      <span className="text-center">Developed with <span className="text-red">&#x2764;</span> by Harshitha</span>
    </div>
  )
};
