import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import * as MainHeader from "./components/Header"; /* Imported using import * as namespace  */ 
import Body from "./components/Body"; /* Imported using default export */
import { Footer as MainFooter } from "./components/Footer"; /* Imported using Named Import Map */
import About from "./components/About";
import Profile from "./components/Profile";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Login from "./components/Login";
import { useLocation } from "react-router-dom";

const AppLayout = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <MainHeader.Header {...location.state} />
      <Outlet />
      <MainFooter />
    </>
  );
};

const appRouter = createBrowserRouter([
  { path         : "/",
    element      : <AppLayout />,
    errorElement : <Error />,
    children     : [
      {
        path     : "/about",
        element  : <About />,
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
        path     : "/",
        element  : <Body />
      },
      {
        path     : "/restaurant/:resId",
        element  : <RestaurantMenu />
      }
    ],
  },
  {
    path : '/login',
    element      : <Login />,
    errorElement : <Error />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
