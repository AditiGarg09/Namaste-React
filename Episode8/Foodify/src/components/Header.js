import { useState } from "react";
import { Link } from "react-router-dom";
import image from "../../images/headerLogo.png";

const Header = () => {
  const [logState, setLogState] = useState(true);

  const handleLogState = () => {
    setLogState(!logState);
  };

  return (
    <>
      <div className="header">
        <Link to="/">
          <div className="logo">
            <img width="50px" src={image} />
          </div>
        </Link>
        <div className="navItems">
          <ul>
            <li>
              <Link to="/" className="headerButton">
                Home
              </Link>
            </li>
            <li>
              <Link to="/aboutUs" className="headerButton">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contactUs" className="headerButton">
                Contact Us
              </Link>
            </li>
            <li>Cart</li>
            <li style={{ marginTop: "7px" }}>
              <button className="logstate" onClick={handleLogState}>
                {logState ? "LogOut" : "LogIn"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
