import React from "react";
import { useDispatch } from "react-redux";
import { updatePaymentMethod } from "../utils/cartSlice";

const PaymentDetails = (payment) => {
  console.log(payment);
  const dispatch = useDispatch();
  const handlePayment = (payment) => {
    dispatch(updatePaymentMethod(payment));
  };
  return (
    <div className="flex flex-col items-center shadow border-2 border-gray mr-4 w-52 mt-3 p-3 hover:scale-105 delay-400 transition-all">
      <h2 className="font-bold text-title text-base">
        {payment && payment.paymentType}
      </h2>
      <p className="text-sm text-bio text-ellipsis">
        {payment && payment.paymentMethod}
      </p>
      <button
        className="bg-green px-3 py-1 text-white mt-1 text-sm"
        onClick={() => handlePayment(payment)}
      >
        CHOOSE PAYMENT
      </button>
    </div>
  );
};

export default PaymentDetails;
