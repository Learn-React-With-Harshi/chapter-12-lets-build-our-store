import { useState, useEffect } from "react";
import { GET_RESTAURANT_MENU} from "../config";


const useRestaurants = (resId) => {
  const [restaurant, setRestaurant] = useState(null); 

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  const getRestaurantInfo = async () => {
    try {
      const response = await fetch(GET_RESTAURANT_MENU + resId);
      const res_data = await response.json();
      setRestaurant(res_data.data)
    } catch (error) {
      console.log(error);
    }
  };

  return restaurant;

}

export default useRestaurants;