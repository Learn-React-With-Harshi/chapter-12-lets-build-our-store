import React from "react";
import { updateDeliveryAddress } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const AddressCard = (address) => {
  const dispatch = useDispatch();
  const handleDeliveryAddress = (address) => {
    dispatch(updateDeliveryAddress(address));
  };
  return (
    <div className="flex flex-col items-center shadow border-2 border-gray mr-4 w-52 mt-3 p-3 hover:scale-105 delay-400 transition-all">
      <h2 className="font-bold text-title text-base">{address.addressType}</h2>
      <p className="text-sm text-bio text-ellipsis">
        {address.addressDescription}
      </p>
      <button
        className="bg-green px-3 py-1 text-white mt-1 text-sm"
        onClick={() => handleDeliveryAddress(address)}
      >
        DELIVER HERE
      </button>
    </div>
  );
};

export default AddressCard;
