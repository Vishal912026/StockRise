import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="#tickets">Track Tickets</a>
      </div>
      <div className="row p-5 m-3">
        <div className="col-6 p-3">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. how do I activate F&O" />
          <br />
          <a href="#tickets">Track account opening</a>{" "}
          <a href="#tickets">Track segment activation</a>{" "}
          <a href="#tickets">Intraday margins</a>{" "}
          <a href="#tickets">Rise Trade user manual</a>
        </div>
        <div className="col-6 p-3">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="#tickets">Latest Intraday leverages - MIS & CO</a>
            </li>
            <li>
              <a href="#tickets">How to place your first order</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;