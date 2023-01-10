import logo from '../../assets/images/logo-main.png';
import cart from '../../assets/images/cart.png';
import profile from '../../assets/images/profile.png';
import home from '../../assets/images/home.png';

export const Title = () => {
  return(
  <a href="/"> <img className="logo" alt="logo" src= {logo} /> </a>
  )
};

export const NavComponent = () => {
  return (
    <div className="nav-items">
    <ul>
      <li> <a href="/"> <img className="home" alt="home" src= {home} /> </a></li>
      <li> <a href="/"> <img className="cart" alt="cart" src= {cart} /> </a></li>
      <li> <a href="/"> <img className="profile" alt="profile" src= {profile} /> </a></li>
    </ul>
  </div>
  );
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