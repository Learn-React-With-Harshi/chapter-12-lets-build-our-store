import { UserAuth } from "../utils/context/AuthContext";
import { Link } from "react-router-dom";
import AddressCard from "./AddressCard";
import { PAYMENT_METHODS, USERS_ADDRESS_LIST } from "../config";
import PaymentDetails from "./PaymentDetails";

export const AccountFallback = () => {
  const { user } = UserAuth();

  return (
    <div className="bg-white drop-shadow-md p-6">
      {user === null ? (
        <div className="flex flex-col justify-start mx-4 gap-4">
          <div>
            <h1 className="text-xl mt-2.5 text-title font-bold ">Account</h1>
            <p>
              To place your order now, log in to your existing account or sign
              up.
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex flex-col justify-center items-center gap-5">
              <h1 className="text-base mt-2.5 text-bio font-bold ">
                Have an account already ?{" "}
              </h1>
              <Link to="/signin">
                <button className="w-[100px] h-[50px] bg-white rounded border border-yellow text-sm text-blue-dark">
                  LOG IN
                </button>
              </Link>
            </div>
            <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray before:mt-0.5 after:flex-1 after:border-t after:border-gray after:mt-0.5">
              <p className="text-center text-bio font-semibold mx-4 mb-0">OR</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
              <h1 className="text-base mt-2.5 text-bio font-bold ">
                New to Instafood ?{" "}
              </h1>
              <Link to="/signup">
                <button className="w-[100px] h-[50px] bg-yellow rounded text-sm text-blue-dark">
                  SIGN UP
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-start mx-4 gap-4">
          <div>
            <div className="bg-white shadow-md p-7 flex flex-col ">
              <h1 className="text-xl mt-2.5 text-title font-bold ">
                Delivery Address
              </h1>
              <div className="flex flex-wrap justify-around items-center w-[100%]">
                {USERS_ADDRESS_LIST.map((address) => {
                  return <AddressCard {...address} key={address.id} />;
                })}
              </div>
            </div>
          </div>

          <div className="bg-white shadow-md p-7">
            <h1 className="text-xl mt-2.5 text-title font-bold ">
              Payment Method
            </h1>
            <div className="flex flex-wrap justify-around items-center w-[100%]">
              {PAYMENT_METHODS.map((payment) => {
                return <PaymentDetails {...payment} key={payment.id} />;
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
