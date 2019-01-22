import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 10, clear: "both", marginTop: 20, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
