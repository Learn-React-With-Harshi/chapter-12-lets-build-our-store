import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";

//Routing
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import store from "./utils/store";

//Authentication
import { AuthContextProvider } from "./utils/context/AuthContext";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

//Components
import * as MainHeader from "./components/Header"; /* Imported using import * as namespace  */
import Body from "./components/Body"; /* Imported using default export */
import { Footer as MainFooter } from "./components/Footer"; /* Imported using Named Import Map */
import Profile from "./components/Profile";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import PaymentPage from "./components/PaymentPage";
import OrderSummary from "./components/OrderSummary";
import Shimmer from "./components/Shimmer";
import RestaurantDetails from "./components/RestaurantDetails";

/* import Instamart from "./components/Instamart";  
On Demand loading
*/
const Instamart = lazy(() => import("./components/Instamart"));
const About = lazy(() => import("./components/About"));
const Help = lazy(() => import("./components/Help"));

const App = () => {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <Outlet />
      </AuthContextProvider>
    </Provider>
  );
};

const AppLayout = () => {
  return (
    <>
      <MainHeader.Header />
      <Outlet />
      <MainFooter />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
          {
            path: "/about",
            element: (
              <Suspense
                fallback={
                  <div className="container">
                    <h1>Loading...</h1>
                  </div>
                }
              >
                {" "}
                <About />
              </Suspense>
            ),
            children: [
              {
                path: "profile",
                element: <Profile />,
              },
            ],
          },
          {
            path: "/contact",
            element: <Contact />,
          },
          {
            path: "/cart",
            element: <Cart />,
          },
          {
            path: "/payment",
            element: <PaymentPage />,
          },
          {
            path: "/ordersummary",
            element: <OrderSummary />,
          },
          {
            path: "/",
            element: <Body />,
          },
          {
            path: "/restaurant/:resId",
            element: <RestaurantDetails />,
          },
          {
            path: "/instamart",
            element: (
              <Suspense fallback={<Shimmer />}>
                {" "}
                <Instamart />
              </Suspense>
            ),
          },
          {
            path: "/help",
            element: (
              <Suspense
                fallback={
                  <div className="container">
                    <h1>Loading...</h1>
                  </div>
                }
              >
                {" "}
                <Help />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "/signin",
        element: <SignIn />,
        errorElement: <Error />,
      },
      {
        path: "/signup",
        element: <SignUp />,
        errorElement: <Error />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
