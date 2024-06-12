import React from "react";
import "./Layout.scss";
import Navbar from "../../components/navbar/Navbar";
import { Navigate, Outlet } from "react-router-dom";
import { userContext } from "../../context/UserContext";

const Layout = () => {
 
  return (
    <>
      <div className="layout">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </>
  )
};

function AuthLayout() {
  const { currentUser } = userContext();
  return currentUser ? (
    <Navigate to="/login" />
  ) : (
    <>
      <div className="layout">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export  {Layout,AuthLayout};
