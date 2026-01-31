import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Body from "./components/Body";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";

const AboutUs = lazy(() => import("./components/AboutUs"));
const RestaurantMenu = lazy(() => import("./components/RestaurantMenu"));
const ContactUs = lazy(() => import("./components/ContactUs"));
const Freshmart = lazy(() => import("./components/Freshmart"));

const App = () => {
  return (
    <Provider store={appStore} >
      <div id="container">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};

const headerRouting = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/freshmart",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Freshmart />
          </Suspense>
        ),
      },
      {
        path: "/aboutUs",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/contactUs",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <ContactUs />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <RestaurantMenu />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={headerRouting} />);
