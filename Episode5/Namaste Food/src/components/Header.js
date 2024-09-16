import { logo_url } from "../utils/constants";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo">
          <img
            width="130px"
            src={logo_url}
          />
        </div>
        <div className="navItems">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
