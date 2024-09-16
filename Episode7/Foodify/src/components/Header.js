import { logo_url } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [logState, setLogState] = useState(true);

  const handleLogState = () => {
    setLogState(!logState);
  };

  return (
    <>
      <div className="header">
        <div className="logo">
          <img width="130px" src={logo_url} />
        </div>
        <div className="navItems">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/aboutUs">About Us</Link>
            </li>
            <li>
              <Link to="/contactUs">Contact Us</Link>
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
