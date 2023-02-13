import React, {lazy, Suspense} from "react";
import { Provider } from 'react-redux';
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import store from "./utils/store";

import { AuthContextProvider } from "./utils/context/AuthContext";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

import * as MainHeader from "./components/Header"; /* Imported using import * as namespace  */ 
import Body from "./components/Body"; /* Imported using default export */
import { Footer as MainFooter } from "./components/Footer"; /* Imported using Named Import Map */
/* import About from "./components/About"; */
import Profile from "./components/Profile";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import Login from "./components/Login";
import Shimmer from "./components/Shimmer";
/* import Instamart from "./components/Instamart";  

On Demand loading

*/

const Instamart = lazy(() => import("./components/Instamart"));
const About = lazy(() => import("./components/About"));
const Help = lazy(() => import("./components/Help"));

const AppLayout = () => {
  return (
    <>
      <Provider store={store} >
      <AuthContextProvider>
        <MainHeader.Header />
          <Outlet />
        <MainFooter />
      </AuthContextProvider>
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  { path       : "/",
    element      : <AppLayout />,
    errorElement : <Error />,
    children     : [
      {
        path : '/signin',
        element      : <SignIn /> ,
        errorElement : <Error />,
      },
      {
        path : '/signup',
        element      : <SignUp /> ,
        errorElement : <Error />,
      },
      {
        path     : "/about",
        element  : (<Suspense fallback={<div className="container"><h1>Loading...</h1></div>}> <About /></Suspense> ),
        children : [{
          path    : "profile",
          element : <Profile />
        }]
      },
      {
        path     : "/contact",
        element  : <Contact />
      },
      {
        path     : "/cart",
        element  : <Cart />
      },
      {
        path     : "/",
        element  : <Body />
      },
      {
        path     : "/restaurant/:resId",
        element  : <RestaurantMenu />
      },
      {
        path     : "/instamart",
        element  : (<Suspense fallback={<Shimmer />}> <Instamart /></Suspense> )
      },
      {
        path     : "/help",
        element  : (<Suspense fallback={<div className="container"><h1>Loading...</h1></div>}> <Help /></Suspense> )
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
