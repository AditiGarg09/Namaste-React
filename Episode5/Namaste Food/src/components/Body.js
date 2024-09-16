import RestaurantCard from "./RestaurantCard";
import { resDetails } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [resList, setResList] = useState(resDetails);

  // const arr = useState(resDetails);
  // const [resList, setResList] = arr;
  // const resList = arr[0];
  // const setResList = arr[1];

  return (
    <>
      <div id="body">
        <div className="filter">
          <button
            onClick={() => {
              const newResList = resList.filter((res) => res.avgRating > 4);
              setResList(newResList);
            }}
            className="TopRestaurant"
          >
            Top Restaurants
          </button>
        </div>
        <div className="restaurantContainer">
          {resList.map((details, i) => (
            <RestaurantCard resData={details} key={details.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
