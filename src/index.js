import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/index";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App tab='home' />
  </Provider>
);
