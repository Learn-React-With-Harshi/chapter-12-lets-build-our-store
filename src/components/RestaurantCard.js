import {IMG_CDN} from "../config";

const RestaurantCard = ({name, cuisines, cloudinaryImageId, avgRating, lastMileTravelString}) => {
  return (
    <div className="card">
      <img className="card-img" src={ IMG_CDN +
          cloudinaryImageId }/>
      <div className="card-body">
        <h6 className="card-title">{name}</h6>
        <p className="card-text">{cuisines.join(", ")}</p>
        <span className="card-rating">{avgRating}</span>
        <span className="eta">{lastMileTravelString} mins</span>
      </div>
    </div>

  );
};

export default RestaurantCard;