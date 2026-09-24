import React from "react";
import { Link } from "react-router-dom";

const stack = [
  { name: "React", desc: "Landing website and trading dashboard UI" },
  { name: "Node.js & Express", desc: "REST API and server logic" },
  { name: "MongoDB", desc: "Holdings, positions and orders database" },
  { name: "Bootstrap", desc: "Responsive, clean layout" },
  { name: "Chart.js", desc: "Portfolio and market charts" },
  { name: "React Router", desc: "Multi-page navigation" },
];

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>Built with a modern MERN stack</h1>
        <p>
          The technologies that power the StockRise landing site, dashboard and
          backend
        </p>

        {stack.map((item) => (
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