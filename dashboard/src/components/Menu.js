import React from "react";
import { Link, useLocation } from "react-router-dom";

const items = [
  { label: "Dashboard", path: "/" },
  { label: "Orders", path: "/orders" },
  { label: "Holdings", path: "/holdings" },
  { label: "Positions", path: "/positions" },
  { label: "Funds", path: "/funds" },
  { label: "Apps", path: "/apps" },
];

const Menu = () => {
  const location = useLocation();

  return (
    <div className="menu-container">
      <img src="/logo.svg" style={{ width: "40px" }} alt="StockRise" />
      <div className="menus">
        <ul>
          {items.map((item) => (
            <li key={item.path}>
              <Link style={{ textDecoration: "none" }} to={item.path}>
                <p className={location.pathname === item.path ? "menu selected" : "menu"}>
                  {item.label}
                </p>
              </Link>
            </li>
          ))}
        </ul>
        <hr />
        <div className="profile">
          <div className="avatar">VP</div>
          <p className="username">Vishal</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;