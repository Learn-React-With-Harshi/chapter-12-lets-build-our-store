import {RES_IMG_CDN } from "../config";
import { AiFillStar } from "react-icons/ai";
import useLocalStorage from "../utils/useLocalStorage";
import { useState } from "react";

export const RestaurantCard = ({ props, setRestaurants}) => {
  const {name, cuisines, cloudinaryImageId, avgRating, slaString, costForTwoString} = props.data;
  const buttonStyle = {
    backgroundColor: avgRating == "--" ? "#fff" : parseFloat(avgRating) < 4.0 ? "#db7c38":"#48c479",
    color : isNaN(avgRating)? "#535665" : "#fff"
  }
  const [isFavourite, setIsFavourite] = useState(false);

  const markFavourite = (event) => {
    setRestaurants(props);
    setIsFavourite(!isFavourite);
    event.preventDefault();
  }

  return (
    <div className="card basis-[250px] p-2.5 mb-2.5 hover:shadow">
      <div className="card-img-container relative w-full ">
        <div className="heart-button absolute z-[2] text-gray-light text-[25px] text-right cursor-pointer rounded-[10rem] w-[99%] ">
          <span className={isFavourite? "mark-fav-icon text-red" : ""} 
          onClick={(e) => {markFavourite(e)}} >&#x2764;</span>
        </div>
        <img className="card-img w-full" src={ RES_IMG_CDN  + cloudinaryImageId } alt={name}/>      
      </div>
      <div className="card-body">
        <h6 className="card-title text-base font-bold w-3/5 tracking-normal">{name}</h6>
        <p className="card-tags text-gray-dark text-xs w-4/5">{cuisines.join(", ")}</p>
        <div className="card-details flex mt-4 justify-between items-center text-xs pb-2.5 text-gray-details font-semibold">
          <div className="rating flex items-center h-5 w-11 gap-1 py-0 px-1" style={buttonStyle}>
            <AiFillStar /><span>{avgRating}</span>
          </div>
          <div>•</div>
          <div>{slaString}</div>
          <div>•</div>
          <div>{costForTwoString}</div>
        </div>
      </div>
    </div>

  );
};
