import React from "react";
import { Link } from "react-router-dom";
// import { Container } from "../components/Grid";

const Nav = (props) => {
  return (
    <div style={{backgroundColor: "white", margin: 10}}>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link 
              to="/">
              <h4 style={{ color: "green", marginRight: 50, backgroundColor: "white" }}>
                <img src="../images/background.jpg" alt="appertree" style={{width: 100}}/>
                <strong> APPER TREE </strong>
              </h4>
            </Link>
          </li>
          <li className="nav-item">
            <Link style={{marginTop: 52}}
              to="/"
              className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
            >
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link style={{marginTop: 52}}
              to="/appers"
              className={window.location.pathname === "/appers" ? "nav-link active" : "nav-link"}
            >
              SUBMIT NEW APP
            </Link>
          </li>
          <li className="nav-item">
            <Link style={{marginTop: 52}}
              to="/profile"
              className={window.location.pathname === "/profile" ? "nav-link active" : "nav-link"}
            >
              MY PROFILE
            </Link>
          </li>
          <li className="nav-item">
            <button style={{marginTop: 52, color: "green", position: 'absolute', right: 30}}
                className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
                onClick={props.logOut}
            >
              LOGOUT
            </button>
          </li>
        </ul>
    </div>
  );

}

export default Nav;
