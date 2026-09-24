import React from "react";
import { Link } from "react-router-dom";

const rows = [
  ["Opening Balance", "4,043.10"],
  ["Payin", "4,064.00"],
  ["SPAN", "0.00"],
  ["Delivery margin", "0.00"],
  ["Exposure", "0.00"],
  ["Options premium", "0.00"],
];

const collateral = [
  ["Collateral (Liquid funds)", "0.00"],
  ["Collateral (Equity)", "0.00"],
  ["Total Collateral", "0.00"],
];

const Funds = () => {
  return (
    <>
      <div className="funds">
        <p>Instant, zero-cost fund transfers with UPI</p>
        <Link to="/funds" className="btn btn-green">Add funds</Link>
        <Link to="/funds" className="btn btn-blue">Withdraw</Link>
      </div>

      <div className="row">
        <div className="col">
          <span>
            <p>Equity</p>
          </span>

          <div className="table">
            <div className="data">
              <p>Available margin</p>
              <p className="imp colored">4,043.10</p>
            </div>
            <div className="data">
              <p>Used margin</p>
              <p className="imp">3,757.30</p>
            </div>
            <div className="data">
              <p>Available cash</p>
              <p className="imp">4,043.10</p>
            </div>
            <hr />
            {rows.map(([label, value]) => (
              <div className="data" key={label}>
                <p>{label}</p>
                <p>{value}</p>
              </div>
            ))}
            <hr />
            {collateral.map(([label, value]) => (
              <div className="data" key={label}>
                <p>{label}</p>
                <p>{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="col">
          <div className="commodity">
            <p>You don't have a commodity account</p>
            <Link to="/funds" className="btn btn-blue">Open Account</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;