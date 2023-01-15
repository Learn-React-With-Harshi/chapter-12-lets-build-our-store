import { RestaurantCard } from './RestaurantCard'; /* Import using Named Import */
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer'; /* Shimmer component to display before page load */
import { GET_RES_API_URL } from '../config'; /* url to get Restaurant data */

const filterData = (searchText, restaurants) => {
  return restaurants.filter(restaurant => restaurant.data.name.toLowerCase().includes(searchText.toLowerCase()));
}

const Body = () => {
  const [searchText, setSearchText] = useState();
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(()=>{
    console.log("useEffect")
    getRestaurants();
  },[]);

  const getRestaurants = async () => {
    try {
      const response = await fetch(GET_RES_API_URL);
      const res_data = await response.json();
      setAllRestaurants(res_data?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurants(res_data?.data?.cards[2]?.data?.data?.cards);
    } catch (error) {
      console.log(error);
    }
    
  };

  const searchData = (searchText, restaurants ) => ()=> {  
    if(searchText !== '') {
      const data = filterData(searchText,restaurants);
      setFilteredRestaurants(data); 
      setErrorMsg('');
    if (data.length === 0) {
      setErrorMsg('No matches found ');
    }
  } else {
      if(errorMsg) setErrorMsg('');
      console.log(allRestaurants);
      setAllRestaurants(allRestaurants);
    }
  }

  console.log("render"); 

// Don't render component (Early return)
if (!allRestaurants) {
  console.log("ealr return")
  return null;
}
return (
    <div className= "container">
      <div className="search-container"> 
        <input type="text" placeholder=" Search for restaurant" value={searchText}
          className="search-input" key="input-text" onChange = {(e) => setSearchText(e.target.value)}/>
        <button className="search-btn" 
          onClick={searchData(searchText, allRestaurants)}> Search </button>
      </div>
    { errorMsg && 
      <div className="error-container" id="error">
        <span className="error-msg" id="error-msg">{errorMsg}</span>
      </div> 
    }
    
    { allRestaurants?.length === 0 ? (<Shimmer />) : 
    <div className="restaurant-container">
      {filteredRestaurants.map((restaurant) => {
        return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
      })}
    </div>
    }
    
  </div>
  );

    
};

export default Body;