import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  ITEM_IMG_CDN } from "../config";
import { addItem, removeItem, clearCart } from '../utils/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);


  const handleAddItem = (item) =>{
    dispatch(addItem(item)); // redux send action object to store {payload : item}
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  }

  return (
    <div className='container flex flex-col'>
      <div className='flex justify-between m-5'>
      <h1 className='text-xl mt-2.5 text-title font-bold '>Cart Items</h1>
      <button className='w-[80px] rounded-md bg-red text-white' onClick={()=>handleClearCart()}>Clear Cart</button>

      </div>
      <div className='flex'>
        <div className="flex flex-col justify-evenly w-[70%] m-5">
              { Object.values(cartItems).map( item => 
              <div className="flex justify-between basis-[848px] max-h-[250px] p-5 border-b border-gray" key={item.id}>
              <div className="flex flex-col basis-[400px]">
                <h3 className="font-bold text-lg w-3/5">{item.name}</h3>
                <p className="mt-1 text-base font-normal">{(item.price > 0) ?
                  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR'}).format(item.price/100 ): " " } </p>
                <p className="mt-3.5 leading-5 text-gray-desc w-4/5 text-base overflow-hidden ">{item.description}</p>
              </div>
              <div className="flex flex-col justify-center items-center w-[118px] h-[150px]">
                { item.cloudinaryImageId  && <img className="w-[118px] h-[96px]" src={ ITEM_IMG_CDN  + item.cloudinaryImageId } alt={item?.name}/> }
                <div className=" flex justify-evenly items-center w-[100px] h-[34px] mt-2.5 text-gray-count outline-none border bg-white border-gray ">
                  <button className="text-xl text-gray-count font-semibold" onClick={() => handleRemoveItem(item.id)}> - </button>
                  <span className="text-base text-green"> {item.quantity} </span>
                  <button className="text-green text-xl" onClick={() => handleAddItem(item)}> + </button>
                </div>
              </div>
            </div>
              )}
        </div>
        <div className="flex flex-col justify-evenly w-[30%] m-5 border border-gray"  >
          Payment
        </div>
      </div>
      
      </div>
    
  )
}

export default Cart;