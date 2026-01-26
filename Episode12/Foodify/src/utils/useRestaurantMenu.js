import { useState, useEffect } from "react";
import { resDetails } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(resDetails + resId);
    const jsonData = await data.json();
    setResInfo(jsonData.data);
  };

  return resInfo;
};

export default useRestaurantMenu;