import React, { useState } from "react";
import ReactDOM from "react-dom";
import "regenerator-runtime/runtime.js";

import Menu from "./components/Menu";
import Home from "./components/Home";

const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="App">
      <Menu setSelectedItem={setSelectedItem} />
      <Home selectedItem={selectedItem} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
