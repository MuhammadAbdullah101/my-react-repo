const divWith2h1 = React.createElement(
  "div",
  { id: "MyDiv" },
  React.createElement("h1", { id: "heading" }, "Hello"),
  React.createElement("h2", { id: "heading2" }, "World")
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(divWith2h1);
