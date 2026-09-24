import React from "react";
import { Link } from "react-router-dom";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src={imageURL} alt={productName} style={{ width: "100%" }} />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDesription}</p>
          <div>
            <Link to={tryDemo} style={{ textDecoration: "none" }}>
              Try Demo
            </Link>
            <Link
              to={learnMore}
              style={{ marginLeft: "50px", textDecoration: "none" }}
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;