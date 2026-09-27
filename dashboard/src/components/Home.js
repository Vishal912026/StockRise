import React, { useEffect } from "react";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import { FRONTEND_URL } from "../config";

const Home = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    const name = params.get("name");

    if (token) {
      localStorage.setItem("token", token);
      localStorage.setItem("name", name || "");
      window.history.replaceState({}, document.title, window.location.pathname);
    }

    const savedToken = localStorage.getItem("token");
    if (!savedToken) {
      window.location.href = `${FRONTEND_URL}/login`;
    }
  }, []);

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;