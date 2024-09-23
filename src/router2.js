import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";
import "./navlink.css";

export default function Router2() {
  return (
    <BrowserRouter>
      <nav className="nav">
        <NavLink
          to="Home"
          className={({ isActive }) => (isActive ? "active_menu" : "menu")}
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "normal",
            };
          }}
        >
          Home
        </NavLink>{" "}
        -&nbsp;
        <NavLink
          to="Products"
          className={({ isActive }) => (isActive ? "active_menu" : "menu")}
        >
          Products
        </NavLink>-&nbsp;
        <NavLink
          to="Member"
          className={({ isActive }) => (isActive ? "active_menu" : "menu")}
        >
          Member
        </NavLink>-&nbsp;
        <NavLink
          to="Contact"
          className={({ isActive }) => (isActive ? "active_menu" : "menu")}
        >
          Contact Us
        </NavLink>
      </nav>
    </BrowserRouter>
    
  );
}
