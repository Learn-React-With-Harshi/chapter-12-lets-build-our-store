import logo from '../../assets/images/logo-main.png';
import cart from '../../assets/images/cart.png';
import loggedIn from '../../assets/images/loggedin.png';
import loggedOut from '../../assets/images/loggedout.png';
import home from '../../assets/images/home.png';
import {useState} from 'react';

export const ImgComponent = ({item, itemname}) => {
  return(
    <a href="/"> <img className={itemname} alt={itemname} src= {item} /> </a>
    )
}

export const Title = () => {
  return(
    <ImgComponent item={logo} itemname={"logo"}/>
  )
};

export const NavComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="nav-items">
    <ul>
      <li> <ImgComponent item={home} itemname={"home"} /> </li>
      <li> <ImgComponent item={cart} itemname={"cart"}/> </li>
      <li> <img src={isLoggedIn ? loggedIn : loggedOut } className={isLoggedIn?  "loggedIn" : "loggedOut" } 
        alt ={isLoggedIn?  "loggedIn" : "loggedOut" } 
        onClick={()=> {setIsLoggedIn(!isLoggedIn);}}/>
      </li>
    </ul>
  </div>
  );
}

export const Login = () => {
  return (
    <div>
      <button className="login-btn">Login</button>
    </div>
  )
}
export const Header = () => {
  
  return (
    <div className="header">
      <Title />
      <NavComponent />
    </div>
  );
};

export default Header;