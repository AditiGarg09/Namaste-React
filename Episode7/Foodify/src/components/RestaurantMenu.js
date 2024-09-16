import { useState, useEffect } from "react";
import ShimmerCards from "./ShimmerCards";
import { useParams } from "react-router-dom";
import { resDetails } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    const data = await fetch(resDetails + resId);
    const jsonData = await data.json();
    console.log(data);
    setResInfo(jsonData?.data);
  };

  if (resInfo === null) {
    return <ShimmerCards />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  console.log(resInfo?.cards[4]);
  return (
    <>
      <div className="menu">
        <h1>{name}</h1>
        <p>
          {cuisines.join(", ")} | {costForTwoMessage}
        </p>
        <ul>
          {itemCards?.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - Rs.
              {item.card.info.defaultPrice / 100 || item.card.info.price / 100}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default RestaurantMenu;
