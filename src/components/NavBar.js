import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        PingMe
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/meetup_locations">
              Meetup Locations
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
