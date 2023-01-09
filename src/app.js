import React from "react";
import ReactDOM from "react-dom/client";

import * as MainHeader from "./components/Header"; /* Imported using import * as namespace  */ 
import Body from "./components/Body"; /* Imported using default export */
import { Footer as MainFooter } from "./components/Footer"; /* Imported using Named Import Map */

const AppLayout = () => {
  return (
    <>
      <MainHeader.Header />
      <Body />
      <MainFooter />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);