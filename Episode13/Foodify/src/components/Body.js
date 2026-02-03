import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ShimmerCards from "./ShimmerCards";
import RestaurantCard, { withDiscountLabel } from "./RestaurantCard";
import useOnlineStatus from "../utils/useOnlineStatus";
import {resMenuList} from "../utils/constants";
// import useRestaurantList from "../utils/useRestaurantList";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  const [resSearch, setResSearch] = useState("");

  const onlineStatus = useOnlineStatus();
  // const { resList, filteredResList } = useRestaurantList;
  const RestaurantCardDiscount = withDiscountLabel(RestaurantCard);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(resMenuList);    
    const jsonData = await data.json();
    setResList(
      //optional chaining
      jsonData?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredResList(
      jsonData?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  if (onlineStatus === false) {
    return (
      <>
        <div>
          <h1 className="onlineStatusInstruction">
            Please check your Internet Connection!!!
          </h1>
        </div>
      </>
    );
  }

  return (
    <>
      <div id="body">
        <div className="flex items-center">
          <div className="flex items-center p-2 mx-4">
            <input
              type="text"
              placeholder="Search Restaurant"
              className="border-2 border-solid border-red-700 rounded-md placeholder-gray-500 placeholder-opacity-50 focus:placeholder-gray-400"
              value={resSearch}
              onChange={(ev) => {
                setResSearch(ev.target.value);
              }}
            />
            <button
              className="my-4 mx-2 p-2 rounded-md bg-red-300 cursor-pointer hover:bg-red-700 hover:text-white"
              onClick={() => {
                setResList(resList);
                const filteredRestaurant = resList.filter((res) =>
                  res?.info?.name
                    ?.toLowerCase()
                    .includes(resSearch.toLowerCase())
                );
                if (filteredRestaurant.length != 0) {
                  setFilteredResList(filteredRestaurant);
                } else {
                  setFilteredResList(resList);
                }
              }}
            >
              {" "}
              Search
            </button>
          </div>
          <div className="p-2">
            <button
              onClick={() => {
                const newResList = resList.filter(
                  (res) => res?.info?.avgRating >= 4
                );
                setFilteredResList(newResList);
              }}
              className="my-4 p-2 rounded-md bg-green-200 cursor-pointer hover:bg-green-700 hover:text-white"
            >
              Top Restaurants
            </button>
          </div>
        </div>
        <div className="flex flex-wrap">
          {resList.length == 0 ? (
            <>
              <ShimmerCards />
              <ShimmerCards />
              <ShimmerCards />
              <ShimmerCards />
              <ShimmerCards />
              <ShimmerCards />
              <ShimmerCards />
              <ShimmerCards />
              <ShimmerCards />
              <ShimmerCards />
            </>
          ) : (
            filteredResList?.map((details) => (
              <Link
                to={"/restaurants/" + details.info.id}
                key={details.info.id}
                className="resCardLink"
              >
                {details.info.aggregatedDiscountInfoV3 ? (
                  // Higher Order Component
                  <RestaurantCardDiscount resData={details.info} />
                ) : (
                  <RestaurantCard resData={details.info} />
                )}
              </Link>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Body;
