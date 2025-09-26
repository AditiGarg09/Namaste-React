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
      <div className="flex justify-between shadow-xl sticky w-full top-0 z-100 bg-gray-100">
        {/* <div className="onlineStatusLogo" title="Online Status">
          {onlineStatus ? "🟢" : "🔴"}
        </div> */}
        <Link to="/">
          <div className="p-2 m-2">
            <img className="w-10" src={image} />
          </div>
        </Link>
        <div className="flex items-center">
          <ul className="flex p-2 m-2">
            <li className="hover:bg-red-700 p-2 mr-4 hover:rounded-lg hover:text-white">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:bg-red-700 p-2 mr-4 hover:rounded-lg hover:text-white">
              <Link to="/freshmart" className="headerButton">
                Freshmart
              </Link>
            </li>
            <li className="hover:bg-red-700 p-2 mr-4 hover:rounded-lg hover:text-white">
              <Link to="/aboutUs" className="headerButton">
                About Us
              </Link>
            </li>
            <li className="hover:bg-red-700 p-2 mr-4 hover:rounded-lg hover:text-white">
              <Link to="/contactUs" className="headerButton">
                Contact Us
              </Link>
            </li>
            <li className="hover:bg-red-700 p-2 mr-4 hover:rounded-lg hover:text-white">
              Cart
            </li>
            <li className="hover:bg-red-700 p-2 mr-4 hover:rounded-lg hover:text-white">
              <button className="logstate" onClick={handleLogState}>
                {logState ? "Log Out" : "Log In"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
