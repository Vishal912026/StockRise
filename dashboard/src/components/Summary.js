import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL, short } from "../config";

const Summary = () => {
  const [holdings, setHoldings] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/allHoldings`)
      .then((res) => setHoldings(res.data))
      .catch((err) => console.error(err));
  }, []);

  const investment = holdings.reduce((sum, h) => sum + h.avg * h.qty, 0);
  const currentValue = holdings.reduce((sum, h) => sum + h.price * h.qty, 0);
  const pnl = currentValue - investment;
  const pnlPercent = investment ? (pnl / investment) * 100 : 0;

  return (
    <>
      <div className="username">
        <h6>Hi, Vishal!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>0</span>
            </p>
            <p>
              Opening balance <span>3.74k</span>
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings ({holdings.length})</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className={pnl >= 0 ? "profit" : "loss"}>
              {short(pnl)} <small>{pnlPercent >= 0 ? "+" : ""}{pnlPercent.toFixed(2)}%</small>
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>{short(currentValue)}</span>
            </p>
            <p>
              Investment <span>{short(investment)}</span>
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;