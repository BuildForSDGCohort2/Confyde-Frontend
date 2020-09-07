import React from 'react';
import { Link, NavLink } from "react-router-dom";
import img from  "../assets/images/logo-1.png";

const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <img src={img} alt="confyde" />
        </Link>
        <NavLink className="nav-item nav-link active" to="/home">
          Home
        </NavLink>

        <NavLink className="nav-item nav-link active" to="/services">
          Services
        </NavLink>

        <NavLink className="nav-item nav-link active" to="/about-us">
          About Us
        </NavLink>

        <NavLink className="nav-item nav-link active" to="/find-a-doctor">
          Find A Doctor
        </NavLink>

        <NavLink className="nav-item nav-link active" to="/login">
          Login
        </NavLink>

        <NavLink className="nav-item nav-link active" to="/register">
          Register
        </NavLink>
      </nav>
    );
}

export default Navbar;
