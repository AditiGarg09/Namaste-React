import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ShimmerCards from "./ShimmerCards";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  const [resSearch, setResSearch] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    setResList(
      //optional chaining
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredResList(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return (
    <>
      <div id="body">
        <div className="filter">
          <div className="search">
            <input
              type="text"
              placeholder="Search Restaurant"
              className="searchInput"
              value={resSearch}
              onChange={(ev) => {
                setResSearch(ev.target.value);
              }}
            />
            <button
              className="searchButton"
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
              <i className="fa fa-search" />
            </button>
          </div>
          <div style={{ marginLeft: "-50px" }}>
            <button
              onClick={() => {
                const newResList = resList.filter(
                  (res) => res?.info?.avgRating >= 4
                );
                setFilteredResList(newResList);
              }}
              className="TopRestaurant"
            >
              Top Restaurants
            </button>
          </div>
        </div>
        <div className="restaurantContainer">
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
                <RestaurantCard resData={details.info} />
              </Link>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Body;
