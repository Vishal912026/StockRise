import React, { useState } from "react";
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
  const [dropdownOpen, setDropdownOpen] = useState(false);
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
        <div style={{ position: "relative" }}>
          <div
            className="profile"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            style={{ cursor: "pointer" }}
          >
            <div className="avatar">{initials}</div>
            <p className="username">{name}</p>
          </div>

          {dropdownOpen && (
            <div
              style={{
                position: "absolute",
                right: 0,
                top: "110%",
                backgroundColor: "#fff",
                boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
                borderRadius: "8px",
                padding: "8px 0",
                minWidth: "160px",
                zIndex: 10,
              }}
            >
              <div style={{ padding: "8px 16px", color: "#888", fontSize: "13px" }}>
                {name}
              </div>
              <hr style={{ margin: "4px 0" }} />
              <div
                onClick={handleLogout}
                style={{ padding: "8px 16px", cursor: "pointer", color: "#d9534f" }}
              >
                Logout
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;