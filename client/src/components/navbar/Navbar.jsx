import React, { useState } from "react";
import "./Navbar.scss";
import {Link} from "react-router-dom";
import { userContext } from "../../context/UserContext.jsx";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const {currentUser} = userContext();
  // const user = false;
  return (
    <nav>
      <div className="left-side">
        <a href="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>Tipra Estate</span>
        </a>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/">Agents</a>
      </div>
      <div className="right-side">
      {currentUser ? (
          <div className="user">
            <img
              src={currentUser.avatar || "/noavatar.jpeg"}
              alt=""
            />
            <span>{currentUser.username}</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/login">Sign in</a>
            <a href="/register" className="register">
              Sign up
            </a>
          </>
        )}

        <div className="menuIcon">
          <img src="/menu.png" alt="" onClick={() => setOpen(!open)} />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="/login">Sign In</a>
          <a href="/register">Sign Up</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
