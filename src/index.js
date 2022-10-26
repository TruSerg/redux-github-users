import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { store } from "./store";

import App from "./App";
import MainLayout from "./components/MainLayout/MainLayout";

import "./styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <MainLayout>
      <App />
    </MainLayout>
  </Provider>
);
