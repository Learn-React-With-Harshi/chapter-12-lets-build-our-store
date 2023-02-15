import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const payment = useSelector((store) => store.cart.paymentMethod);
  const navigate = useNavigate();
  useEffect(() => {
    //Mock payment page  - Succesful payment
    if (true) {
      navigate("/ordersummary");
    }
  }, []);

  return (
    <div className="container flex flex-col justify-around mob:flex-col">
      <div className="flex justify-center my-10">
        <div>{payment.paymentMethod}</div>
      </div>
    </div>
  );
};

export default PaymentPage;
