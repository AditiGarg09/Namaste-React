import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement(
    "div",
    { id: "parent" },
    React.createElement("div", { id: "child" },
        [
            React.createElement("h1", { id: "heading" }, "This is h1 tag"),
            React.createElement("h2", { id: "heading" }, "This is h2 tag"),
        ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);