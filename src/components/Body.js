import { RestaurantCard } from './RestaurantCard'; /* Import using Named Import */
import { restaurantList } from '../config'; /* Named Import*/
import { useState } from 'react';

const filterData = (searchText, restaurants) => {
  console.log(searchText);
  const f = restaurants.filter(restaurant => restaurant.data.name.toLowerCase().includes(searchText));
  return f; 
}

const Body = () => {
  const [searchText, setSearchText] = useState();
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [errorMsg, setErrorMsg] = useState('');

  const searchData = (searchText, restaurants ) => ()=> {  
    if(searchText !== '') {
    const data = filterData(searchText,restaurants);
    setRestaurants(data); 
    if (data.length === 0) {
      setErrorMsg('No matches found ');
    }
  } else {
      if(errorMsg) setErrorMsg('');
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
    { errorMsg && 
      <div className="error-container" id="error">
        <span className="error-msg" id="error-msg">{errorMsg}</span>
      </div> 
    }
    
    <div className="restaurant-list">
      {restaurants.map((restaurant) => {
        return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
      })}
    </div>
    </div>
  );
};

export default Body;