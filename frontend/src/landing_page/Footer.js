import React from "react";
import { Link } from "react-router-dom";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Products", to: "/product" },
      { label: "Pricing", to: "/pricing" },
      { label: "Careers", href: "#" },
      { label: "Press & media", href: "#" },
      { label: "StockRise on GitHub", href: "https://github.com/Vishal912026/StockRise" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact", to: "/support" },
      { label: "Support portal", to: "/support" },
      { label: "Blog", href: "#" },
      { label: "List of charges", href: "#" },
      { label: "Downloads & resources", href: "#" },
    ],
  },
  {
    title: "Account",
    links: [
      { label: "Open an account", to: "/signup" },
      { label: "Fund transfer (demo)", href: "#" },
      { label: "60 day challenge", href: "#" },
    ],
  },
];

function FooterLink({ item }) {
  const style = { textDecoration: "none" };
  if (item.to) {
    return (
      <Link to={item.to} style={style}>
        {item.label}
      </Link>
    );
  }
  return (
    <a
      href={item.href}
      style={style}
      target={item.href?.startsWith("http") ? "_blank" : undefined}
      rel={item.href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {item.label}
    </a>
  );
}

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
                  <FooterLink item={l} />
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
            investment advice. All prices, holdings and orders shown are
            simulated for demonstration purposes only.
          </p>

          <p>
            This project was built to learn and showcase full-stack
            development skills (React, Node.js, Express, MongoDB) — it is not
            affiliated with, endorsed by, or connected to any real brokerage
            or financial institution.
          </p>

          <p>
            Investments in securities markets are subject to market risks;
            read all the related documents carefully before investing in
            real life.
          </p>

          <p>
            As a general safety practice: never share your account
            credentials, OTPs, or passwords with anyone, and always verify
            you're on the correct website before entering login details —
            this applies to real trading platforms as much as to demo
            projects like this one.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;