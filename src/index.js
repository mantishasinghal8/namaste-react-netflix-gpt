import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Body from "./components/Body";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  //<React.StrictMode>
  <Provider store={appStore}>
    <Body />
  </Provider>
  //</React.StrictMode>
);