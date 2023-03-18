import React from 'react'
import CartFallback from "../components/CartFallback";
import ItemQuantity from "./ItemQuantity";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useItemTotal from "../utils/useItemTotal";
import RestaurantItemCategory from "./RestaurantItemCategory.js";
import RestaurantNestedItemCategory from "./RestaurantNestedItemCategory.js";


const RestaurantMenuList = ({menu}) => {
   // get cart items from redux store
const cartItems = useSelector((store) => store.cart.items);
// get total price for cart items
const getItemTotal = useItemTotal();

  return (
    <div className="flex justify-center sm:flex-col xsm:flex-col mob:flex-col">
      <div className="mt-7 xl:w-[70%] lg:w-[70%] md:w-[70%] card-container">
      {menu.map((item, index) => (
        <div key={index}>
          {item.categories ? (
            <RestaurantNestedItemCategory nestedCategory={item} />
          ) : (
            <RestaurantItemCategory itemCategory={item} />
          )}
        </div>
      ))}
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
  )
}

export default RestaurantMenuList