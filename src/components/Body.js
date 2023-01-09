import RestaurantCard from './RestaurantCard';
import { restaurantList } from '../config';
import { useState } from 'react';

const filterData = (searchText, restaurants) => {
  console.log(searchText);
  const f = restaurants.filter(restaurant => restaurant.data.name.toLowerCase().includes(searchText));
  return f; }



const Body = () => {
  const [searchText, setSearchText] = useState();
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [errorMsg, setErrorMsg] = useState("false");

  const searchData = (searchText, restaurants ) => ()=> {  
    if(searchText !== '') {
    const data = filterData(searchText,restaurants);
    setRestaurants(data); 
    if (data.length === 0) {
      document.getElementById("error").classList.remove("hide");
    }
  
  }
    else {
      setRestaurants(restaurantList);
    }
  }

  return (
    <div className= "container">
    <div className="search-container"> 
      <input type="text" placeholder=" Search for restaurant" value={searchText}
        className="search-input" key="input-text" onChange = {(e) => setSearchText(e.target.value)}/>
      <button className="search-btn" 
      onClick={searchData(searchText, restaurants)}> Search </button>
    </div>
    <div className="error-container hide" id="error">
      <span className="error-msg" id="error-msg">No matches found </span>
    </div>
    <div className="restaurant-list">
      {restaurants.map((restaurant) => {
        return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
      })}
    </div>
    </div>
  );
};

export default Body;