import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="container text-center p-5">
    <img src="media/images/logo.svg" alt="StockRise logo" style={{ width: "160px" }} />
    <h1 className="mt-4">StockRise</h1>
    <p className="text-muted">Setup working</p>
    <img src="media/images/homeHero.png" alt="hero" style={{ width: "60%" }} />
  </div>
);