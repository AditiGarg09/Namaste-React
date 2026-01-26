import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import image from "../../images/headerLogo.png";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [logState, setLogState] = useState(true);

  // const onlineStatus = useOnlineStatus();

  const handleLogState = () => {
    setLogState(!logState);
  };

  const data = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  const totalCartItems = Object.values(cartItems).reduce(
    (total, item) => total + (item.quantity || 0),
    0
  );

  return (
    <>
      <div className="flex justify-between shadow-xl sticky w-full top-0 z-100 bg-gray-100">

        <Link to="/">
          <div className="p-2 m-2">
            <img className="w-10" src={image} />
          </div>
        </Link>

        <div className="flex items-center">

          <ul className="flex p-2 m-2">

            <Link to="/">
              <li className="hover:bg-red-700 p-2 mr-4 hover:rounded-lg hover:text-white">
                Home
              </li>
            </Link>

            <Link to="/freshmart">
              <li className="hover:bg-red-700 p-2 mr-4 hover:rounded-lg hover:text-white">
                Freshmart
              </li>
            </Link>

            <Link to="/aboutUs">
              <li className="hover:bg-red-700 p-2 mr-4 hover:rounded-lg hover:text-white">
                About Us
              </li>
            </Link>

            <Link to="/contactUs">
              <li className="hover:bg-red-700 p-2 mr-4 hover:rounded-lg hover:text-white">
                Contact Us
              </li>
            </Link>

            <Link to="/cart">
              <li className="hover:bg-red-700  p-2 mr-4 hover:rounded-lg hover:text-white font-bold">
                Cart ({totalCartItems} items)
              </li>
            </Link>

            <li className="hover:bg-red-700 p-2 mr-4 hover:rounded-lg hover:text-white">
              <button className="logstate" onClick={handleLogState}>
                {logState
                  ? `Log Out - ${data.loggedInUser}`
                  : `Log In - ${data.loggedInUser}`}
              </button>
            </li>

          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
