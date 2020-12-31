import React from "react";
import { NavLink, Link } from "react-router-dom";
const Navbar = ({ user }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <img
          src={"/images/lala.jpg"}
          alt=""
          style={{ width: "100px", height: "50px", marginLeft: "10px" }}
        />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <Link className="navbar-brand" to="/">
        E-Commerce
      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <NavLink className="nav-link nav-item" to="/contactus">
              Contact us
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink className="nav-link nav-item" to="/about">
              About
            </NavLink>
          </li>
          {!user && (
            <React.Fragment>
              <NavLink className="nav-item nav-link" to="/login">
                Login
              </NavLink>
              <NavLink className="nav-item nav-link" to="/register">
                Register
              </NavLink>
            </React.Fragment>
          )}
          {user && (
            <React.Fragment>
              <NavLink className="nav-item nav-link" to="/profile">
                {user.name}
              </NavLink>
              <NavLink className="nav-item nav-link" to="/logout">
                Logout
              </NavLink>
            </React.Fragment>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
