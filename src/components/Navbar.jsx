import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a  href="##">
            Navbar
          </a>
          <Link to={"/enlistedbots"} className="navbar-brand">
            <button className="btn btn-outline-success d-flex" type="submit">
              My Army
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
