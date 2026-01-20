import { useState, useEffect } from "react";
import { resDetails } from "../utils/constants";

const useRestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(resDetails + '123456');
    const jsonData = await data.json();
    console.log("fetching data", jsonData);

    setResInfo(jsonData.data);
  };

  return resInfo;
};

export default useRestaurantMenu;