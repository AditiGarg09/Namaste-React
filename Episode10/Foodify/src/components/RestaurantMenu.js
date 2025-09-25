import ShimmerCards from "./ShimmerCards";
import { useParams } from "react-router-dom";
import { resMenuImages } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <ShimmerCards />;
  }

  const { name } = resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <>
      <div className="m-4 p-4">
        <h1 className="font-bold text-2xl">{name}</h1>
        <>
          {itemCards?.map((item) => (
            <div key={item.card.info.id} className="py-4 my-4 flex justify-between items-center border border-solid border-gray-100 rounded-lg">
              <div className="p-4 w-10/12">
              
                <h3 className="font-bold text-lg py-4">{item.card.info.name}</h3>
                <div className="py-4 flex justify-between font-bold">
                <p >
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
                </div>
                <p>{item.card.info.description}</p>
              </div>
              {item.card.info.imageId && (
                <div className="resMenuItems h-55 w-55">
                  <img
                    src={resMenuImages + "/" + item.card.info.imageId}
                    // height="144"
                    // width="156"
                    className="h-55 w-55"
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
