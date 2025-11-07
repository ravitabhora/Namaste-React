
const header = [
  React.createElement("div", { id: "parent1" }, [
    React.createElement("div", { id: "child1" }, [
      React.createElement("h1", {}, "child1 : This is React from js(h1)."),
      React.createElement("h2", {}, "This is React from js."),
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "This is React from js."),
      React.createElement("h2", {}, "This is React from js."),
    ]),
  ]),
  React.createElement("div", { id: "parent2" }, [
    React.createElement("h1", {}, "This is React from js."),
    React.createElement("h2", {}, "This is React from js."),
  ]),
];

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(header);
