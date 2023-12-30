import React from "react";
import ReactDOM from "react-dom";

const title = (
  <div>
    <h1>Welcome to foundation series</h1>
  </div>
);

const HeadingComponent = () => (
  <div id="container">
    {title}
    <p>This is paragraph Tag</p>
  </div>
);

var root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
