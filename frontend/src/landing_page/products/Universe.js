import React from "react";
import { Link } from "react-router-dom";

const features = [
  { name: "Real-Time Market Data", desc: "Live price updates so you never miss a move" },
  { name: "Fast Order Execution", desc: "Buy and sell orders processed instantly" },
  { name: "Secure by Design", desc: "Modern authentication keeps your account protected" },
  { name: "Clean, Intuitive UI", desc: "Everything you need, without the clutter" },
  { name: "Portfolio Insights", desc: "Track your holdings, positions and P&L at a glance" },
  { name: "Built for Everyone", desc: "Simple for beginners, powerful for active traders" },
];

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>Why traders choose StockRise</h1>
        <p>
          Everything you need for a smooth trading experience, from real-time
          data to secure order execution
        </p>

        {features.map((item) => (
          <div className="col-4 p-3 mt-5" key={item.name}>
            <h4 className="text-primary">{item.name}</h4>
            <p className="text-small text-muted">{item.desc}</p>
          </div>
        ))}

        <Link
          to="/signup"
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </Link>
      </div>
    </div>
  );
}

export default Universe;