import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import "typeface-roboto";

import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";

const store = createStore(rootReducer);

import App from "@/components/App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
