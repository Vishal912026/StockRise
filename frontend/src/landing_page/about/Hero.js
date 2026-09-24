import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 text-center">
          We believe trading should be simple and transparent
          <br />
          StockRise is built with modern technology.
        </h1>
      </div>

      <div
        className="row p-5 mt-5 border-top text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-5">
          <p>
            StockRise is a full-stack stock trading platform built to learn and
            demonstrate how a modern broking product works end to end: a public
            landing site, a trading dashboard, and a REST API with a database.
          </p>
          <p>
            The name says it all: a platform to help your portfolio rise, with
            clear pricing, clean design, and fast performance.
          </p>
        </div>
        <div className="col-6 p-5">
          <p>
            The project has three parts: a React landing website, a React
            dashboard with holdings, positions, orders and charts, and a Node.js
            and Express backend with MongoDB.
          </p>
          <p>
            It is an educational project and does not handle real money or
            provide investment advice.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;