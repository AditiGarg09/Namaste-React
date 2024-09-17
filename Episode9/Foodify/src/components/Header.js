import { useState } from "react";
import { Link } from "react-router-dom";
import image from "../../images/headerLogo.png";
// import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [logState, setLogState] = useState(true);
  // const onlineStatus = useOnlineStatus();

  const handleLogState = () => {
    setLogState(!logState);
  };

  return (
    <>
      <div className="header">
        {/* <div className="onlineStatusLogo" title="Online Status">
          {onlineStatus ? "🟢" : "🔴"}
        </div> */}
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
              <Link to="/freshmart" className="headerButton">
                Freshmart
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
