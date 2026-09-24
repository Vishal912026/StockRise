import React, { useState } from "react";
import { DASHBOARD_URL } from "../../config";

function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = DASHBOARD_URL;
  };

  return (
    <div className="container p-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <h1 className="fs-2 mb-4 text-center">Open a StockRise account</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Full name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Continue to dashboard
            </button>
            <p className="text-muted mt-3" style={{ fontSize: "13px" }}>
              This is a demo project. No real account is created.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;