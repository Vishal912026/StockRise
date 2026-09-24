import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <div
            style={{
              width: "180px",
              height: "180px",
              borderRadius: "100%",
              backgroundColor: "#387ed1",
              color: "#fff",
              fontSize: "60px",
              fontWeight: "700",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto",
            }}
          >
            VP
          </div>
          <h4 className="mt-4">Vishal Kumar Prajapati</h4>
          <h6>Creator, Full Stack (MERN) Developer</h6>
        </div>
        <div className="col-6 p-3">
          <p>
            Vishal designed and built StockRise end to end, from the React
            frontend and dashboard to the Node.js, Express and MongoDB backend.
          </p>
          <p>
            Connect on{" "}
            <a href="https://github.com/Vishal912026" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;