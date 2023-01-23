import React from "react";
import "./css/Navbar.css"

function Navbar() {
  return (
    <div className="navbar">
      <nav className="navbar ">
        <div className="container-fluid">
          <p
            className="btn btn-outline-success d-flex navbar-brand"
            type="submit"
          >
            Bot Battlr App
          </p>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
