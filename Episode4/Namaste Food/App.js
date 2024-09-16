import React from "react";
import ReactDOM from "react-dom/client";

const resDetails = [
  {
    id:1,
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/743ffc0123317228d2b9b3698c034361",
    name: "Murthal No.1 Parantha",
    avgRating: "4.3",
    time: "25-30 mins",
    costForTwo: "500 FOR TWO",
    cuisins: "North Indian, Snacks, Punjabi, Beverages",
  },
  {
    id:2,
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7",
    name: "Pizza Hut",
    avgRating: "4",
    time: "35-40 mins",
    costForTwo: "500 FOR TWO",
    cuisins: "Pizzas",
  },
  {
    id:3,
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597",
    name: "Chinese Wok",
    avgRating: "4",
    time: "35-40 mins",
    costForTwo: "250 FOR TWO",
    cuisins: "Chinese, Asian, Tibetan, Desserts",
  },
  {
    id:4,
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
    name: "Burger King",
    avgRating: "4.3",
    time: "15-20 mins",
    costForTwo: "500 FOR TWO",
    cuisins: "Burgers, American",
  },
  {
    id:5,
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/9a4762b0a6b75949c19354ed3c9ee83d",
    name: "The Legends Cafe",
    avgRating: "4.1",
    time: "25-30 mins",
    costForTwo: "500 FOR TWO",
    cuisins: "Beverages, Fast Food, Deserts",
  },
  {
    id:6,
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/c0c8847463eaf7e4212a88c3a9abdd63",
    name: "Samosa Party",
    avgRating: "4.2",
    time: "35-40 mins",
    costForTwo: "500 FOR TWO",
    cuisins: "Beverages, Fast Food, Deserts",
  },
  {
    id:7,
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/wufqy6jau9zdobzlmjkp",
    name: "High on Desserts",
    avgRating: "4.5",
    time: "25-30 mins",
    costForTwo: "250 FOR TWO",
    cuisins: "Waffles, Deserts",
  },
];

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo">
          <img
            width="130px"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTixSUP5HiArm6qHpoVT_wPRvIuPQYizt_Xk5lsXJInTA&s"
          />
        </div>
        <div className="navItems">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
};

const RestaurantCard = (props) => {
  const { image, name, avgRating, time, costForTwo, cuisins } = props.resData;
  return (
    <>
      <div className="resContainer">
        <div className="resImg">
          <img src={image} height="130px" width="190" />
        </div>
        <div className="resName">
          <h3>{name}</h3>
          <div className="resFooter">
            <h4>
              <span className="fa fa-star checked"></span> {avgRating}
            </h4>
            <h4 className="resTime">{time}</h4>
            {/* <h4 className="resPrice">&#8377;{costForTwo}</h4> */}
          </div>
          <h4 className="resCuisins" title={cuisins}>
            {cuisins}
          </h4>
        </div>
      </div>
    </>
  );
};
const Body = () => {
  return (
    <>
      <div id="body">
        <div className="search">Search</div>
        <div className="restaurantContainer">
          {resDetails.map((details, i) => (
            <RestaurantCard resData={details} key={details.id} />
          ))}
        </div>
      </div>
    </>
  );
};

const App = () => {
  return (
    <>
      <div id="container">
        <Header />
        <Body />
        {/* <Footer /> */}
      </div>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
