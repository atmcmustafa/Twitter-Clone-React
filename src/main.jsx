import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import Navigation from "./components/FixedComponents/Navigation";
import RightNavigation from "./components/FixedComponents/RightNavigation";

import MobileNavigation from "./components/FixedComponents/MobileNavigation";
import RoutesComponent from "./components/Router/Routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="container mx-auto">
      <BrowserRouter>
        <div className="flex justify-center">
          <MobileNavigation />
          <Navigation />
          <RoutesComponent />
          <RightNavigation />
        </div>
      </BrowserRouter>
    </div>
  </React.StrictMode>
);
