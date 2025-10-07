import { useState, useEffect } from "react";
import { resMenuList } from "./constants";

const useRestaurantList = () => {
  const [resList, setResList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(resMenuList);
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
  return {resList, filteredResList};
};

export default useRestaurantList;
