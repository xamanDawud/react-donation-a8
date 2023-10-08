import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Donation from "./components/Donation/Donation.jsx";
import Middler from "./components/Middler/Middler";
import DetailsDonation from "./components/DetailsDonation/DetailsDonation";
import StatisticsReact from "./components/StatisticsReact/StatisticsReact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Middler></Middler>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/statistics",
        element: <StatisticsReact></StatisticsReact>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/detailsDonation/:Id",
        element: <DetailsDonation></DetailsDonation>,
        loader: () => fetch("/data.json"),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <React.StrictMode></React.StrictMode>
  </RouterProvider>
);
