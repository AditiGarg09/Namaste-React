const RestaurantCard = (props) => {
  const { image, name, avgRating, time, costForTwo, cuisins } = props.resData;
  return (
    <>
      <div className="resContainer">
        <div className="resImg">
          <img src={image} height="130px" width="190" />
        </div>
        <div className="resName">
          <h3>{name}</h3>
          <div className="resFooter">
            <h4>
              <span className="fa fa-star checked"></span> {avgRating}
            </h4>
            <h4 className="resTime">{time}</h4>
            {/* <h4 className="resPrice">&#8377;{costForTwo}</h4> */}
          </div>
          <h4 className="resCuisins" title={cuisins}>
            {cuisins}
          </h4>
        </div>
      </div>
    </>
  );
};

export default RestaurantCard;
