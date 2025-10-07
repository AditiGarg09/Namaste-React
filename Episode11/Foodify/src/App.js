import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/userContext";

const AboutUs = lazy(() => import("./components/AboutUs"));
const RestaurantMenu = lazy(() => import("./components/RestaurantMenu"));
const ContactUs = lazy(() => import("./components/ContactUs"));
const Freshmart = lazy(() => import("./components/Freshmart"));

const App = () => {
  // authentication
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    // userInfo Details API
    const data = {
      name: "Aditi Garg",
    };
    setUserInfo(data.name);
  }, []);

  return (
    // Default Value
    <UserContext.Provider value={{ loggedInUser: userInfo,setUserInfo }}>
      {/* userInfo Value */}
      <div id="container">
        <Header />
        {/* <UserContext.Provider value={{ loggedInUser: "New User" }}> */}
          {/* New User */}
          <Outlet />
        {/* </UserContext.Provider> */}
      </div>
    </UserContext.Provider>
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
