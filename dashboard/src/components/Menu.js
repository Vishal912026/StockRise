import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FRONTEND_URL } from "../config";

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
  const name = localStorage.getItem("name") || "User";
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    window.location.href = `${FRONTEND_URL}/login`;
  };

  return (
    <div className="menu-container">
            <a href={FRONTEND_URL}>
        <img src="/logo.svg" style={{ width: "40px" }} alt="StockRise" />
      </a>
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
        <div
          className="profile"
          onClick={handleLogout}
          style={{ cursor: "pointer" }}
          title="Click to logout"
        >
          <div className="avatar">{initials}</div>
          <p className="username">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;