import React from "react";
import ReactDOM from "react-dom";
import Helmet from "react-helmet";

import App from "../src/components/App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <div>
    <Helmet>
      <style>{"body { background-color:#fff9b6; }"}</style>
    </Helmet>
    <App />
  </div>,
  rootElement
);
