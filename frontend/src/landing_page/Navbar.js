import React from "react";
import { Link } from "react-router-dom";

const links = [
  { label: "Signup", to: "/signup" },
  { label: "About", to: "/about" },
  { label: "Product", to: "/product" },
  { label: "Pricing", to: "/pricing" },
  { label: "Support", to: "/support" },
];

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom sticky-top"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container p-2">
        <Link className="navbar-brand" to="/">
          <img
            src="/media/images/logo.svg"
            style={{ height: "40px" }}
            alt="StockRise"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-lg-0">
            {links.map((item) => (
              <li className="nav-item" key={item.to}>
                <Link className="nav-link active" to={item.to}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;