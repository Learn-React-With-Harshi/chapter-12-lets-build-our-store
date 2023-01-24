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
    <div className="card">
      <div className="card-img-container">
        <div className="heart-button">
          <span className={isFavourite? "mark-fav-icon" : ""} 
          onClick={(e) => {markFavourite(e)}} >&#x2764;</span>
        </div>
        <img className="card-img" src={ RES_IMG_CDN  + cloudinaryImageId } alt={name}/>      
      </div>
      <div className="card-body">
        <h6 className="card-title">{name}</h6>
        <p className="card-tags">{cuisines.join(", ")}</p>
        <div className="card-details">
          <div className="rating" style={buttonStyle}>
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
