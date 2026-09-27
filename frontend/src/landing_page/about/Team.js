import React from "react";

const techStack = ["React", "Node.js", "Express", "MongoDB", "Bootstrap"];

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center">People</h1>
      </div>

      <div
        className="row p-4 mt-3"
        style={{
          backgroundColor: "#f8f9fa",
          borderRadius: "16px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
          margin: "0 auto",
          maxWidth: "95%",
        }}
      >
        <div className="col-md-4 p-3 text-center">
          <img
            src="/media/images/profile.jpg"
            alt="Vishal Kumar Prajapati"
            style={{
              width: "180px",
              height: "180px",
              borderRadius: "100%",
              objectFit: "cover",
              objectPosition: "center 20%",
              margin: "0 auto",
              display: "block",
              boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
            }}
          />
          <h4 className="mt-4 mb-0">Vishal Kumar Prajapati</h4>
          <h6 className="text-muted">Creator, Full Stack (MERN) Developer</h6>
        </div>

        <div
          className="col-md-8 p-3 text-muted"
          style={{ lineHeight: "1.8", fontSize: "1.1em" }}
        >
          <p>
            Vishal designed and built StockRise end to end, from the React
            frontend and dashboard to the Node.js, Express and MongoDB
            backend.
          </p>
          <p>
            Built as part of his journey learning full-stack development, and
            to understand how real trading platforms work under the hood.
          </p>

          <div className="mt-3 mb-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="badge rounded-pill"
                style={{
                  backgroundColor: "#e7f0ff",
                  color: "#387ed1",
                  fontWeight: "500",
                  fontSize: "0.85em",
                  padding: "8px 14px",
                  marginRight: "8px",
                  marginBottom: "8px",
                  display: "inline-block",
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          <p>
            Connect on{" "}
            <a
              href="https://github.com/Vishal912026"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
            or write to{" "}
            <a href="mailto:vishalprajapati6037@gmail.com">
              vishalprajapati6037@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;