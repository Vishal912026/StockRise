import React from "react";
import { Link } from "react-router-dom";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Products", to: "/product" },
      { label: "Pricing", to: "/pricing" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Support portal", to: "/support" },
      { label: "Contact", to: "/support" },
    ],
  },
  {
    title: "Account",
    links: [{ label: "Open an account", to: "/signup" }],
  },
];

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <img
              src="/media/images/logo.svg"
              style={{ height: "40px" }}
              alt="StockRise"
            />
            <p className="mt-3">&copy; 2026 StockRise. All rights reserved.</p>
          </div>
          {columns.map((col) => (
            <div className="col" key={col.title}>
              <p className="fw-semibold">{col.title}</p>
              {col.links.map((l) => (
                <div key={l.label} className="mb-2">
                  <Link to={l.to} style={{ textDecoration: "none" }}>
                    {l.label}
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="mt-5 mb-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            StockRise is an educational, full-stack MERN portfolio project
            inspired by modern discount-broking platforms. It is not a
            registered broker, does not handle real money, and does not offer
            investment advice. All data shown is for demonstration only.
          </p>
          <p>
            Investments in securities markets are subject to market risks; read
            all the related documents carefully before investing.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;