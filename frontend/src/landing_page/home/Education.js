import React from "react";
import { Link } from "react-router-dom";

function Education() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img
            src="/media/images/education.svg"
            style={{ width: "70%" }}
            alt="Education"
          />
        </div>
        <div className="col-6">
          <h1 className="mb-3 fs-2">Free and open market education</h1>
          <p>
            Rise Learn, an easy stock market education hub covering everything
            from the basics to advanced trading.
          </p>
          <Link to="/support" style={{ textDecoration: "none" }}>
            Rise Learn{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </Link>
          <p className="mt-5">
            Community Q&A, a place for all your market related queries and
            discussions.
          </p>
          <Link to="/support" style={{ textDecoration: "none" }}>
            Community Q&A{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Education;