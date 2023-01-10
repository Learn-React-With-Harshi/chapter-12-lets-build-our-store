import {IMG_CDN} from "../config";

export const RestaurantCard = ({name, cuisines, cloudinaryImageId, avgRating, lastMileTravelString}) => {
  return (
    <div className="card">
      <img className="card-img" src={ IMG_CDN +
          cloudinaryImageId }/>
      <div className="card-body">
        <h6 className="card-title">{name}</h6>
        <p className="card-text">{cuisines.join(", ")}</p>
        <div className="card-params">
          <span className= {(avgRating && avgRating > 3)? "card-rating bg-success" : "card-rating bg-danger"}>{avgRating}</span>
          <span className="eta">{lastMileTravelString} mins</span>
        </div>
      </div>
    </div>

  );
};
