import { useParams } from "react-router-dom";
import { RES_IMG_CDN } from "../config";
import { MenuShimmer } from "./Shimmer";
import MenuItem from "./MenuItem.js";
import { AiFillStar } from "react-icons/ai";
import useRestaurant from "../utils/useRestaurant";
import CartFallback from "../components/CartFallback";
import { useSelector } from "react-redux";
import ItemQuantity from "./ItemQuantity";
import useItemTotal from "../utils/useItemTotal";
import { Link } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams(); /* Read dynamic URL params */

  const restaurant =
    useRestaurant(
      resId
    ); /* Passing resId to Custom Hooks to fetch restaurant details and returns it */

  // get cart items from redux store
  const cartItems = useSelector((store) => store.cart.items);
  // get total price for cart items
  const getItemTotal = useItemTotal();

  return !restaurant ? (
    <MenuShimmer />
  ) : (
    <div className="container">
      <div className="flex basis-full h-60 justify-evenly items-center bg-blue-dark text-gray p-8">
        <img
          className="w-[254px] h-[165px] mob:w-[130px] mob:[81px]"
          src={RES_IMG_CDN + restaurant?.cloudinaryImageId}
          alt={restaurant?.name}
        />
        <div className="flex flex-col basis-[540px] m-5 ">
          <h2 className="text-3xl max-w-[538px] font-semibold">
            {restaurant?.name}
          </h2>
          <p className="overflow-hidden whitespace-nowrap text-[15px] max-w-[538px]">
            {restaurant?.cuisines.join(", ")}
          </p>
          <div className="flex mt-5 justify-between items-center text-sm font-semibold pb-2.5 max-w-[342px] mob:text-xs mob:font-normal">
            <div className="flex items-center px-1 py-0 gap-1">
              <AiFillStar />
              <span>{restaurant?.avgRating}</span>
            </div>
            <div>|</div>
            <div>{restaurant?.sla.slaString}</div>
            <div>|</div>
            <div>{restaurant?.costForTwoMsg}</div>
          </div>
        </div>
      </div>

      <div className="flex justify-center sm:flex-col xsm:flex-col mob:flex-col">
        <div className="mt-7 xl:w-[70%] lg:w-[70%] md:w-[70%] card-container">
          <div className="p-5">
            <h3 className="font-bold text-lg">Recommended</h3>
            <p className="mt-3.5 w-3/5 text-gray-desc text-sm">
              {Object.keys(restaurant?.menu?.items).length} ITEMS
            </p>
          </div>
          <div className="flex flex-col justify-evenly">
            {Object.values(restaurant?.menu?.items).map((item) => (
              <MenuItem key={item.id} item={item} />
            ))}
          </div>
        </div>
        <div className="basis-[30%]">
          {Object.values(cartItems).length > 0 ? (
            <div className=" card-container basis-[298px] p-10">
              <h1 className="font-bold text-lg mt-2.5">Cart</h1>

              <p className="text-gray-count">
                {Object.values(cartItems).length} item
              </p>

              {Object.values(cartItems).map((item) => {
                return (
                  <div className="flex items-center mt-2 justify-between">
                    <p className="w-40 text-sm">{item.name}</p>
                    <div className="w-30 px-5">
                      <ItemQuantity item={item} key={item.id} />
                    </div>

                    <p className="w-10 font-thin text-sm">
                      {"₹ " + (item.price / 100) * item.quantity}
                    </p>
                  </div>
                );
              })}
              <div className="border border-gray my-4"></div>
              <div className="flex justify-between mt-4">
                <p className="text-sm text-bio ">Sub Total</p>
                {"₹ " + getItemTotal()}
              </div>
              <div className="flex justify-center mt-10">
                <Link to="/cart">
                  {" "}
                  <button className="bg-yellow px-4 py-2 text-blue-dark hover:drop-shadow-lg backdrop-blur">
                    {" "}
                    CHECKOUT
                  </button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="card-container w-[348px]">
              <CartFallback
                text={
                  "Good food is always cooking! Go ahead, order some yummy items from the menu."
                }
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
