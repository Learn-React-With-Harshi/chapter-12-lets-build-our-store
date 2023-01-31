import { useParams } from "react-router-dom";
import { RES_IMG_CDN, ITEM_IMG_CDN } from "../config";
import { MenuShimmer } from "./Shimmer";
import {AiFillStar} from 'react-icons/ai';
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const { resId } = useParams(); /* Read dynamic URL params */

  const restaurant  = useRestaurant(resId); /* Passing resId to Custom Hooks to fetch restaurant details and returns it */

  return !restaurant ? (
    <MenuShimmer />
    ) : (
    <div className="restaurant-menu mt-24 min-h-screen">
      <div className="restaurant-summary flex basis-full h-60 justify-evenly items-center bg-blue-dark text-gray p-8">
        <img className="restaurant-img w-[254px] h-[165px]" src={ RES_IMG_CDN  + restaurant?.cloudinaryImageId } alt={restaurant?.name}/>
        <div className="restaurant-summary-details flex flex-col basis-[540px] m-5 ">
          <h2 className="restaurant-title text-3xl max-w-[538px] font-semibold">{restaurant?.name}</h2>
          <p className="restaurant-tags overflow-hidden whitespace-nowrap text-[15px] max-w-[538px]">{restaurant?.cuisines.join(", ")}</p>
          <div className="restaurant-details flex mt-5 justify-between items-center text-sm font-semibold pb-2.5 max-w-[342px]">
            <div className="restaurant-rating flex items-center px-1 py-0 gap-1">
              <AiFillStar /><span>{restaurant?.avgRating}</span>
            </div>
            <div>|</div>
            <div>{restaurant?.sla.slaString}</div>
            <div>|</div>
            <div>{restaurant?.costForTwoMsg}</div>
          </div>
        </div>
      </div>

      <div className="restaurant-menu-content flex justify-center">
        <div className="menu-items-container mt-7 w-[848px]">
          <div className="menu-title-wrap p-5">
            <h3 className="menu-title font-bold text-lg">Recommended</h3>
            <p className="menu-count mt-3.5 w-3/5 text-gray-desc text-sm">{Object.keys(restaurant?.menu?.items).length} ITEMS</p>
          </div>
          <div className="menu-items-list flex flex-col justify-evenly">
            { Object.values(restaurant?.menu?.items).map( item => 
            <div className="menu-item flex justify-between basis-[848px] max-h-[250px] p-5 border-b border-light-gray" key={item?.id}>
              <div className="menu-item-details flex flex-col basis-[400px]">
                <h3 className="item-title font-bold text-lg w-3/5">{item?.name}</h3>
                <p className="item-cost mt-1 text-base font-normal">{(item?.price > 0) ?
                  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR'}).format(item?.price/100 ): " " } </p>
                <p className="item-desc mt-3.5 leading-5 text-gray-desc w-4/5 text-base overflow-hidden">{item?.description}</p>
              </div>
              <div className="menu-img-wrapper flex flex-col justify-center items-center w-[118px] h-[150px]">
                { item?.cloudinaryImageId  && <img className="menu-item-img w-[118px] h-[96px]" src={ ITEM_IMG_CDN  + item?.cloudinaryImageId } alt={item?.name}/> }
                <button className="add-btn bg-yellow text-blue-dark w-[94px] h-[34px] outline-none border-yellow mt-2.5 rounded"> ADD +</button>
              </div>
            </div>
            )}
          </div>
        </div>
        <div className="cart-widget"></div>

      </div>
    </div>
  )
}

export default RestaurantMenu;