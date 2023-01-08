import RestaurantCard from './RestaurantCard';
import { restaurantList } from '../config';
import { useState } from 'react';

const filterData = (searchText, restaurants) => {
  console.log(searchText);
  const f = restaurants.filter(restaurant => restaurant.data.name.toLowerCase().includes(searchText));
  console.log(f);
  return f; }


const Body = () => {
  const [searchText, setSearchText] = useState();
  const [restaurants, setRestaurants] = useState(restaurantList);
  return (
    <>
    <div className="search-container"> 
      <input type="text" placeholder="Search for restaurant" value={searchText}
        onChange = {(e) => setSearchText(e.target.value)}/>
        <h1>{searchText}</h1>
      <button className="search-btn" 
      onClick={()=> { 
        const data = filterData(searchText,restaurants);
        setRestaurants(data);} }> Search </button>
    </div>
    <div className="restaurant-list">
      {restaurants.map((restaurant) => {
        return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
      })}
    </div>
    </>
  );
};

export default Body;