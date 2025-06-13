// src/components/Navbar.js

import React from "react";
import "../App.css"; // veya ayrı bir css dosyası yaptıysan onu da import et

function Navbar() {
  return (
    <div className="navbar">
      <img src="/netflix-logo.png" alt="Netflix" className="logo" />
      <ul className="nav-links">
        <li>Home</li>
        <li>Movies</li>
        <li>My List</li>
      </ul>
    </div>
  );
}

export default Navbar;
