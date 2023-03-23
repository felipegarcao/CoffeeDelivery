import "./styles/global.css";

import { App } from "./App";
import { CartProvider } from "./hooks/useCart";
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
