import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const jsxHeading = (
  <h1 id="title" className="title">
    Namaste React by Akshay Saini - React Element
  </h1>
);

const Title = () => {
  return <h1 id="heading">Title of the Page</h1>;
};
// React Functional Component

const BodyComponent = () => {
  return (
    <div id="container">
      <Title />
      {jsxHeading}
      <p>{100+200}</p>
      {console.log("Console working in JSX")}
      <h1 id="body">React Functional Component - BodyComponent</h1>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BodyComponent />);
