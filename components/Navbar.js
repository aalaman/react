import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "10px", padding: "10px" }}>
      <Link to="/">Home</Link>
      <Link to="/add">Add Contact</Link>
      <Link to="/contacts">Contact List</Link>
    </nav>
  );
}

export default Navbar;
