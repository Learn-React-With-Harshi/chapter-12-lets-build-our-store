import { RestaurantCard } from './RestaurantCard'; /* Import using Named Import */
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer'; /* Shimmer component to display before page load */
import { GET_RESTAURANTS_LIST } from '../config'; /* url to get Restaurant data */
import { Link } from 'react-router-dom';
import { filterData } from '../utils/helper';
import useOnline from "../utils/useOnline";

const Body = () => {
  const [searchText, setSearchText] = useState();
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  const isOnline = useOnline(); 

  
  useEffect(()=>{
    getRestaurants();
  },[]);

  const getRestaurants = async () => {
    try {
      const response = await fetch(GET_RESTAURANTS_LIST);
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
      setAllRestaurants(allRestaurants);
    }
  }

  if(!isOnline) {
    return <div className="container"><h1>Offline, please check your internet connection </h1></div>
  } 

// Don't render component (Early return)
if (!allRestaurants) {
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
        return ( <Link
          className="link-styles" to={"/restaurant/" + restaurant.data.id} key={restaurant.data.id}>
          <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
        </Link>
        )
      })}
    </div>
    }
    
  </div>
  );

    
};

export default Body;