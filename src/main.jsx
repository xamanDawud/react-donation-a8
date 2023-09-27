import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Donation from "./components/Donation/Donation.jsx";
import Staticks from "./components/Staticks/Staticks.jsx";
import Middler from "./components/Middler/Middler";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Middler></Middler>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
      },
      {
        path: "/statistics",
        element: <Staticks></Staticks>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <React.StrictMode></React.StrictMode>
  </RouterProvider>
);