import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h1>Maak je eigen playlist!</h1>
      <div className="Nav">
        <Link to="/">Playlist </Link>
        <Link to="AboutUs.js">About Us</Link>
      </div>
    </nav>
  );
}

export default Navbar;
