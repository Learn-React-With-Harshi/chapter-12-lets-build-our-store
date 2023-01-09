import logo from '../../assets/images/logo-main.png';

export const Title = () => {
  return(
  <a href="/"> <img className="logo" alt="logo" src= {logo} /> </a>
  )
};

export const NavComponent = () => {
  return (
    <div className="nav-items">
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
      <li>Cart</li>
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