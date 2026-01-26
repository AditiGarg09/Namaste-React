import ItemList from "./ItemList";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItemsObj = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  // convert object to array for ItemList
  const cartItems = Object.values(cartItemsObj);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <div className="text-center m-4 p-4">
        <h1 className="font-bold text-2xl">Cart</h1>
      </div>

      <div className="w-6/12 m-auto">
        {cartItems.length > 0 ? (
          <>
            <div className="text-center mb-4">
              <button
                className="p-2 rounded-md bg-red-300 cursor-pointer hover:bg-red-700 hover:text-white"
                onClick={handleClearCart}
              >
                Clear Cart
              </button>
            </div>

            <ItemList itemCardsData={cartItems} />
          </>
        ) : (
          <div className="text-center">
            <h1 className="mb-2">Add Items to the Cart</h1>
            <Link to="/">
              <button className="mx-2 p-2 rounded-md bg-red-300 cursor-pointer hover:bg-red-700 hover:text-white">
                Explore Restaurants
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
