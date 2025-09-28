import { CDN_images } from "../utils/constants";

const RestaurantCard = (props) => {
  const { name, avgRating, cloudinaryImageId, sla, cuisines } = props.resData;

  return (
    <>
      <div className="m-4 p-4 w-63 bg-gray-100 rounded-lg h-96 overflow-hidden shadow-md hover:shadow-2xl">
        <div className="overflow-hidden rounded-lg">
          <img
            src={CDN_images + cloudinaryImageId}
            className="hover:scale-125 transition duration-500 ease-in-out h-44 w-full"
          />
        </div>
        <div className="font-bold py-4 text-lg overflow-hidden text-ellipsis whitespace-nowrap">
          <h3 title={name}>{name}</h3>
        </div>
        <div className="flex justify-between">
          <h4>
            <span className="fa fa-star checked"></span> {avgRating}
          </h4>
          <h4 className="resTime">{sla.slaString}</h4>
        </div>
        <h4 className="py-4 text-ellipsis" title={cuisines}>
          {cuisines.join(", ")}
        </h4>
      </div>
    </>
  );
};

export const withDiscountLabel = (RestaurantCard) => {
  return (props) => {
    const discount = props.resData.aggregatedDiscountInfoV3.header + " " + props.resData.aggregatedDiscountInfoV3.subHeader
    return (
      <>
        <div>
          <label className="absolute mx-6 my-2 p-1 z-1 bg-cyan-900 text-white rounded-lg text-sm">
            {discount}
          </label>
          <RestaurantCard {...props} />
        </div>
      </>
    );
  };
};

export default RestaurantCard;
