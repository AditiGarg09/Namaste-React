/* Create following Structure

<h1 id="parent">
    Hello World through React
</h1>

*/

/*
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World through React"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
*/

/* Create following Structure

<div id="parent">
    <div id="child">
        <h1 id="heading">
            Hello World through React
        </h1>
    </div>
</div>

*/

/*
const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {id:"heading"}, "Hello World from React!")
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
*/

/* Create following Structure

<div id="parent">
    <div id="child">
        <h1 id="heading">
            This is h1 tag
        </h1>
        <h1 id="heading">
            This is h2 tag
        </h1>
    </div>
</div>

*/

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
