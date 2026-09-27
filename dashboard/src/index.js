import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import { FRONTEND_URL } from "./config";

const params = new URLSearchParams(window.location.search);
const token = params.get("token");
const name = params.get("name");

if (token) {
  localStorage.setItem("token", token);
  localStorage.setItem("name", name || "");
  window.history.replaceState({}, document.title, window.location.pathname);
}

window.addEventListener("pageshow", (event) => {
  if (event.persisted && !localStorage.getItem("token")) {
    window.location.href = `${FRONTEND_URL}/login`;
  }
});

if (!localStorage.getItem("token")) {
  window.location.href = `${FRONTEND_URL}/login`;
} else {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}