import logo from '../../assets/images/logo-main.png';
import cart from '../../assets/images/cart.png';
import profile from '../../assets/images/profile.png';
import home from '../../assets/images/home.png';

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
  return (
    <div className="nav-items">
    <ul>
      <li> <ImgComponent item={home} itemname={"home"} /> </li>
      <li> <ImgComponent item={cart} itemname={"cart"}/> </li>
      <li> <ImgComponent item={profile} itemname={"profile"} /> </li>
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