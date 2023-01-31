import { RestaurantCard } from './RestaurantCard'; /* Import using Named Import */
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer'; /* Shimmer component to display before page load */
import { GET_RESTAURANTS_LIST } from '../config'; /* url to get Restaurant data */
import { Link } from 'react-router-dom';
import { filterData } from '../utils/helper';
import useOnline from "../utils/useOnline";
import useLocalStorage from '../utils/useLocalStorage';


const Body = () => {
  const [searchText, setSearchText] = useState();
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');
  const isOnline = useOnline();  /* Custom Hook */
  const [isFavourite, setIsFavourite] = useState(false);
  const [favRestaurants, setFavRestaurants] = useLocalStorage("fav"); /* Custom Hook */

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

  const addFavourite = (props) => {
     // If restaurant is not marked fav, then add to local storage 
    if (!favRestaurants.find(restaurant => restaurant.data.id === props.data.id)) {
      setFavRestaurants([...favRestaurants, props]);
  } else { //If restaurant is already in local storage, then remove from it.
      const modifiedFavRestaurants = favRestaurants.filter((restaurant) => restaurant.data.id !== props.data.id);
      setFavRestaurants(modifiedFavRestaurants);
  }
  }

  const showFavouriteRestaurants = () => {      
    if(isFavourite) {
      if(errorMsg) setErrorMsg('');
      setFilteredRestaurants(allRestaurants);        
    } else {
      if(favRestaurants.length === 0) { 
        setErrorMsg('No favourites');
        setFilteredRestaurants([]); 
      } else {
        setFilteredRestaurants(favRestaurants); 
      }
    }
    setIsFavourite(!isFavourite); 
  }

// Don't render component (Early return)
if (!allRestaurants) {
  return null;
}
return (
    <div className= "container mt-24 min-h-screen min-w-screen">
      <div className="features-container flex justify-start">
        <div className="search-container flex justify-evenly min-w-[500px] h-[100px] items-center m-auto"> 
          <input type="text" placeholder=" Search for restaurant" value={searchText}
            className="search-input outline-none text-base p-2 basis-96 h-8 rounded-md ring-1 ring-gray  bg-gray sm:text-sm sm:basis-[300px]" key="input-text" onChange = {(e) => setSearchText(e.target.value)}/>
          <button className="search-btn bg-yellow h-8 text-blue-dark basis-16 rounded-md outline-none text-base border-yellow sm:text-sm sm:basis-[50px]" 
            onClick={searchData(searchText, allRestaurants)}> Search </button>
        </div>
        <div className="favourite-container flex justify-end h-[100px] items-center m-auto sm:flex-col ">
            <button className={isFavourite? "fav-btn fav-btn-active bg-yellow h-8 text-blue-dark rounded-md border border-yellow outline-none text-base px-2": "fav-btn bg-white h-8 text-blue-dark rounded-md border-yellow border outline-none text-base px-2" } 
            onClick={()=> {showFavouriteRestaurants()}}>Favourites </button>
        </div>
      </div>
    { errorMsg && 
      <div className="error-container h-14 m-auto text-center" id="error">
        <span className="error-msg w-14 h-8 text-sm text-red" id="error-msg">{errorMsg}</span>
      </div> 
    }
    
    { allRestaurants?.length === 0 ? (<Shimmer />) : 
    <div className="restaurant-container flex flex-wrap gap-5 justify-evenly">
      {filteredRestaurants.map((restaurant) => {
        return ( <Link
          className="link-styles basis-60 p-3 mb-3" to={"/restaurant/" + restaurant.data.id} key={restaurant.data.id}>
          <RestaurantCard props={restaurant} key={restaurant.data.id} setRestaurants={addFavourite} />
        </Link>
        )
      })}
    </div>
    }
    
  </div>
  );

};

export default Body;