import { CDN_images } from "../utils/constants";

const RestaurantCard = (props) => {
  const { name, avgRating, cloudinaryImageId, sla, cuisines } = props.resData;

  return (
    <>
      <div className="resContainer">
        <div className="resImg">
          <img
            src={CDN_images + cloudinaryImageId}
            height="130px"
            width="190"
          />
        </div>
        <div className="resName">
          <h3 title={name}>{name}</h3>
        </div>
        <div className="resFooter">
          <h4>
            <span className="fa fa-star checked"></span> {avgRating}
          </h4>
          <h4 className="resTime">{sla.slaString}</h4>
          {/* <h4 className="resPrice">&#8377;{costForTwo}</h4> */}
        </div>
        <h4 className="resCuisins" title={cuisines}>
          {cuisines.join(", ")}
        </h4>
      </div>
    </>
  );
};

export default RestaurantCard;
