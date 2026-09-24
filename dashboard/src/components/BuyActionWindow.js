import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import GeneralContext from "./GeneralContext";
import { watchlist } from "../data/data";
import { API_URL, money } from "../config";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, mode }) => {
  const generalContext = useContext(GeneralContext);
  const stock = watchlist.find((item) => item.name === uid);

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(stock ? stock.price : 0);

  const handleOrder = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/newOrder`, {
        name: uid,
        qty: Number(stockQuantity),
        price: Number(stockPrice),
        mode,
      });
      generalContext.closeBuyWindow();
    } catch (err) {
      alert("Could not place the order. Please try again.");
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    generalContext.closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              min="1"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Order value ₹{money(stockQuantity * stockPrice)}</span>
        <div>
          <Link
            to="/"
            className="btn btn-blue"
            style={mode === "SELL" ? { backgroundColor: "#e74c3c" } : undefined}
            onClick={handleOrder}
          >
            {mode === "SELL" ? "Sell" : "Buy"}
          </Link>
          <Link to="/" className="btn btn-grey" onClick={handleCancel}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;