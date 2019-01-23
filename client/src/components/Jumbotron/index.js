import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 600, clear: "both", marginTop: 5, color: "green", paddingTop: 20 }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
