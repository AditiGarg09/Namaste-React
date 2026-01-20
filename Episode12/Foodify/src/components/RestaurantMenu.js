import ShimmerMenu from "./ShimmerMenu";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategoryMenu from "./RestaurantCategoryMenu";
import { useState } from "react";

const RestaurantMenu = () => {
  const resInfo = useRestaurantMenu();
  const [showItems, setShowItems] = useState(0);

  if (resInfo === null) {
    return <ShimmerMenu />;
  }

  const { name } = resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(categories);
  return (
    <>
      <div className="m-4 p-4">
        <h1 className="font-bold text-2xl cursor-default text-center">
          {name}
        </h1>
        <>
          {categories.map((category, index) => (
            <RestaurantCategoryMenu
              key={category.card.card.title}
              data={category.card.card}
              showItems={showItems === index && true}
              setShowIndex={() => setShowItems(index)}
            />
          ))}
        </>
      </div>
    </>
  );
};
export default RestaurantMenu;
