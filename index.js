var element = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "h1child1" }, "This is h1 Element"),
    React.createElement("h2", { id: "h1child2" }, "This is h2 Element"),
  ]),
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "h1child1" }, "This is h1 Element"),
    React.createElement("h2", { id: "h1child2" }, "This is h2 Element"),
  ]),
]);

var root = ReactDOM.createRoot(document.getElementById("root"));

root.render(element);
