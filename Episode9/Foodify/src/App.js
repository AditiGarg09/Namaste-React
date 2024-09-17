import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AboutUs = lazy(() => import("./components/AboutUs"));
const RestaurantMenu = lazy(() => import("./components/RestaurantMenu"));
const ContactUs = lazy(() => import("./components/ContactUs"));
const Freshmart = lazy(() => import("./components/Freshmart"));

const App = () => {
  return (
    <>
      <div id="container">
        <Header />
        <Outlet />
      </div>
    </>
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
