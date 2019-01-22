import React from "react";
import { Link} from "react-router-dom";
import { Container } from "../Grid";

const Nav = (props) => {
  return (
    <div style={{backgroundColor: "lightgray"}}>
      <Container>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
              <h1 style={{ color: "green", marginRight: 50 }}><strong> APPER TREE </strong></h1>
            </Link>
          </li>
          <li className="nav-item">
            <Link style={{marginTop: 28}}
              to="/appers"
              className={window.location.pathname === "/appers" ? "nav-link active" : "nav-link"}
            >
              SUBMIT NEW APP
            </Link>
          </li>
          <li className="nav-item">
            <Link style={{marginTop: 28}}
              to="/profile"
              className={window.location.pathname === "/profile" ? "nav-link active" : "nav-link"}
            >
              MY PROFILE
            </Link>
          </li>
          <li className="nav-item">
            <button style={{marginLeft: 350, marginTop: 28}}
                className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
                onClick={props.logOut}
            >
              LOGOUT
            </button>
          </li>
        </ul>
      </Container>
    </div>
  );

}

export default Nav;
