import logo from '../../assets/images/logo-main.png';
import {useContext, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import useOnline from '../utils/useOnline';
import UserContext from "../utils/UserContext";
import { AiOutlineMenu } from "react-icons/ai";

const navLinks = [
  {
    title : 'Home',
    path  : '/'
  },
  {
    title : 'About',
    path  : '/about'
  },
  {
    title : 'Instamart',
    path  : '/instamart'
  },
  {
    title : 'Help',
    path  : '/help'
  }
];


export const Title = () => {
  return(
    <Link to="/"> <img className="logo ml-2.5 w-[70px]" alt={"logo"} src= {logo} /> </Link>
  )
};

export const Intro = () => {
  const {user} = useContext(UserContext);
  return(
    <div className='flex justify-center items-center'>
      <span className="py-2.5 px-1 mt-2.5 mr-1 font-bold text-green"> { user.name ? `Hello  ${user.name}` : "Please Login "} !!!</span>
    </div>
  )
};


export const NavComponent = () => {
  const {user, setUser} = useContext(UserContext);
  const navigate = useNavigate();
  const isOnline = useOnline();

  const [isLoggedIn, setIsLoggedIn] = useState(user.isAuthenticated || false);
  const [menuActive, setMenuActive] = useState(false);

  const closeMenu = () => {
    const menu = document.querySelector('.menu-content-container');
    menu.classList.remove('active');
    menu.classList.add('false');
    setMenuActive(!menuActive)
  }

  const toggleLogin = () => {
    console.log("isLoggedIn", isLoggedIn);
    setIsLoggedIn(!isLoggedIn);
    if(!user.isAuthenticated ) {
      setUser({isAuthenticated: false }) 
    } else {
      setUser({isAuthenticated: false, msg: "You have logged out of Insta Food App. " }) ;
    }  
    navigate('/login');
  }

  return (
    <div className="flex items-center justify-between">
      <div className={`menu-content-container flex items-center pr-7  ${menuActive && 'active'}`} >
        <ul className={`h-full lg:flex xl:flex md:flex items-center pr-5 ${!menuActive && 'hidden'}  ${menuActive && 'flex flex-col flex-start '}`}>
          { navLinks.map((link, index)=> (
            <li key={index} className="p-2.5">
              <Link to={link.path}><button className="nav--btn">{link.title}</button></Link>
            </li>
            ))
          }
          <li className="p-2.5"> <button className="nav--btn" onClick={() => {toggleLogin()}} > {isLoggedIn?  "Logout " : "Login " }  
              <span className={isOnline ? "text-green" : "text-red" }>●</span></button>
          </li>
        </ul>
      </div>
      <AiOutlineMenu className='lg:hidden xl:hidden md:hidden flex w-[65px] text-base text-blue-dark cursor-pointer '
      onClick={()=> { console.log("icon")
        closeMenu();
        setMenuActive(!menuActive)
      }
      }/>
    </div>
  );
}

export const Header = () => {
  return (
    <div className="flex justify-between bg-white shadow fixed top-0 left-0 w-full h-[70px] z-50">
      <Title />
      <Intro />
      <NavComponent />
    </div>
  );
};

export default Header;