import React from "react";

const topics = [
  {
    title: "Account Opening",
    links: [
      "Online Account Opening",
      "Offline Account Opening",
      "Company, Partnership and HUF Account",
      "NRI Account Opening",
      "Getting Started",
    ],
  },
  {
    title: "Your StockRise Account",
    links: [
      "Login credentials",
      "Profile and settings",
      "Two-factor authentication",
      "Account closure",
    ],
  },
  {
    title: "Trading and Markets",
    links: [
      "Placing orders",
      "Order types",
      "Margins and leverage",
      "Segment activation",
    ],
  },
  {
    title: "Funds",
    links: [
      "Adding funds",
      "Withdrawing funds",
      "Fund transfer issues",
      "Statements",
    ],
  },
  {
    title: "Dashboard",
    links: [
      "Holdings",
      "Positions",
      "Orders",
      "Reports and P&L",
    ],
  },
  {
    title: "Rise API",
    links: [
      "Getting API keys",
      "API documentation",
      "Rate limits",
      "Reporting a bug",
    ],
  },
];

function CreateTicket() {
  return (
    <div className="container" id="tickets">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2">To create a ticket, select a relevant topic</h1>
        {topics.map((topic) => (
          <div className="col-4 p-5 mt-2 mb-2" key={topic.title}>
            <h4>
              <i className="fa fa-plus-circle" aria-hidden="true"></i>{" "}
              {topic.title}
            </h4>
            {topic.links.map((link) => (
                           <div key={link}>
                <a href="#tickets" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                  {link}
                </a>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;