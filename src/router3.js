import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import "./navlink.css";
import Home from "./home";
import Products from "./products";
import Member from "./member";


export default function Router3() {
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
        </NavLink>
        -&nbsp;
        <NavLink
          to="Member"
          className={({ isActive }) => (isActive ? "active_menu" : "menu")}
        >
          Member
        </NavLink>
        -&nbsp;
        <NavLink
          to="Contact"
          className={({ isActive }) => (isActive ? "active_menu" : "menu")}
        >
          Contact Us
        </NavLink>
      </nav>
      <Routes style={{ margin: "20px" }}>
        <Route path="/home" element={<Home/>} />
        <Route path="/products" element={<Products />} />
        <Route path="/member" Component={Member} />
        <Route path="/contact" element={<div style={{textAlign:"center"}}>Contact Page</div>} />
        <Route path="/*" element={<div style={{textAlign:"center"}}>Error 404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}
