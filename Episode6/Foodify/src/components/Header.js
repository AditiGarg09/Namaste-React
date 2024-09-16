import { logo_url } from "../utils/constants";
import { useState } from "react";

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
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
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
