import { IoIosArrowDropdown } from "react-icons/io";
import ItemList from "./ItemList";

const RestaurantCategoryMenu = ({ data,showItems,setShowIndex }) => {

  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div className="w-8/12 bg-gray-50 mx-auto my-4 p-4 items-center rounded-lg shadow-lg cursor-pointer">
      <div className="flex justify-between" onClick={handleClick}>
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span
          className={`transform transition-transform duration-300 ${
            showItems ? "rotate-180" : ""
          }`}
        >
          <IoIosArrowDropdown />
        </span>
      </div>

      <div
        className={`transition-all duration-700 ease-in-out overflow-hidden ${
          showItems ? "opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ItemList itemCardsData={data.itemCards} />
      </div>
    </div>
  );
};

export default RestaurantCategoryMenu;
