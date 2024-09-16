import { useState, useEffect } from "react";
import ShimmerCards from "./ShimmerCards";
import { useParams } from "react-router-dom";
import { resDetails, resMenuImages } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    const data = await fetch(resDetails + resId);
    const jsonData = await data.json();

    setResInfo(jsonData?.data);
  };

  if (resInfo === null) {
    return <ShimmerCards />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  console.log(itemCards);
  return (
    <>
      <div className="menu">
        <h1 className="menuName">{name}</h1>
        <>
          {itemCards?.map((item) => (
            <div key={item.card.info.id} className="resMenu">
              <div className="resMenuDetails">
                <h3>{item.card.info.name}</h3>
                <p>
                  &#8377;{" "}
                  {item.card.info.defaultPrice / 100 ||
                    item.card.info.price / 100}
                </p>
                {item.card.info.ratings.aggregatedRating.rating && (
                  <p>
                    <span className="fa fa-star checked"></span>{" "}
                    {item.card.info.ratings.aggregatedRating.rating} (
                    {item.card.info.ratings.aggregatedRating.ratingCountV2})
                  </p>
                )}
                <p>{item.card.info.description}</p>
              </div>
              {item.card.info.imageId && (
                <div className="resMenuItems">
                  <img
                    src={resMenuImages + "/" + item.card.info.imageId}
                    height="144"
                    width="156"
                    style={{borderRadius: "5px"}}
                  />
                </div>
              )}
            </div>
          ))}
        </>
      </div>
    </>
  );
};
export default RestaurantMenu;
