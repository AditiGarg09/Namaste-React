import food_placeholder from "../../images/food_placeholder.webp";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const ItemList = ({ itemCardsData }) => {

  const dispatch = useDispatch();
  const cartItems = useSelector(store => store.cart.items)

  const handleAddItem = (items) => {
    dispatch(addItem(items))
  }

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <>
      {itemCardsData.map((items) => {
        const card = items.card ?? items;
        if (!card?.info) return null;


        const itemId = items.card.info.id;
        const itemCount = cartItems[itemId]?.quantity || 0;
        return (
          <div className="border-b-2 border-gray-200 m-4 p-2 flex justify-between items-center" key={items.card.info.id}>
            <div className="w-9/12">
              <div
                className="flex font-bold text-gray-900 text-lg"
              >
                <span>{items.card.info.name}</span>
                <span className="mb-4">
                  - &#8377;
                  {items.card.info.price
                    ? items.card.info.price / 100
                    : items.card.info.defaultPrice / 100}
                </span>
              </div>
              <div>{items.card.info.description}</div>
            </div>

            <div className=" w-3/12 relative mb-4">
              <button className="absolute bottom-2 left-1/2 -translate-x-1/2 translate-y-1/2 bg-gray-200 rounded-lg px-3 py-1 hover:bg-red-900 hover:text-white cursor-pointer shadow-md">
                {itemCount > 0 && (
                  <span onClick={() => handleRemoveItem(itemId)} className="mx-2">-</span>
                )}

                <span className="mx-2">
                  {itemCount === 0 ? (
                    <span onClick={() => handleAddItem(items)}>Add</span>
                  ) : (
                    itemCount
                  )}
                </span>

                {itemCount > 0 && (
                  <span onClick={() => handleAddItem(items)} className="mx-2">+</span>
                )}
              </button>

              <img
                src={food_placeholder}
                className="w-full max-h-44"
              />
            </div>
          </div>
        );
      })}
    </>
  );
};
export default ItemList;
