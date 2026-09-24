import React from "react";
import { Link } from "react-router-dom";

const points = [
  {
    title: "Customer-first always",
    text: "A clean, fast interface built around what traders actually need: watchlist, orders, holdings and positions in one place.",
  },
  {
    title: "No spam or gimmicks",
    text: "No gimmicks, spam, \"gamification\", or annoying push notifications. High quality apps that you use at your pace, the way you like.",
  },
  {
    title: "The StockRise universe",
    text: "Not just an app, but a whole ecosystem: trading dashboard, funds, learning and APIs working together.",
  },
  {
    title: "Do better with money",
    text: "Portfolio charts and clear P&L views help you understand your money instead of just moving it around.",
  },
];

function Stats() {
  return (
    <div className="container p-3">
      <div className="row p-5">
        <div className="col-6 p-5">
          <h1 className="fs-2 mb-5">Trust with confidence</h1>
          {points.map((p) => (
            <div key={p.title}>
              <h2 className="fs-4">{p.title}</h2>
              <p className="text-muted">{p.text}</p>
            </div>
          ))}
        </div>
        <div className="col-6 p-5">
          <img
            src="/media/images/ecosystem.png"
            style={{ width: "90%" }}
            alt="Ecosystem"
          />
          <div className="text-center">
            <Link
              to="/product"
              className="mx-5"
              style={{ textDecoration: "none" }}
            >
              Explore our products{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </Link>
            <Link to="/signup" style={{ textDecoration: "none" }}>
              Try demo{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;