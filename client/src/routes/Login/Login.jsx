import React, { useState } from "react";
import { Link, json } from "react-router-dom";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";
import { userContext } from "../../context/UserContext.jsx";

const Login = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { updateUser } = userContext();
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");
    setIsLoading(true);
    console.log(username);
    try {
      const res = await apiRequest.post("/auth/login", {
        username,
        password,
      });
      setIsLoading(false);
      console.log(res);
      updateUser(res);
      // navigate();
      // localStorage.setItem("user-details",JSON.stringify(res));
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    }
  };
  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleFormSubmit}>
          <h1>Welcome back</h1>
          <input name="username" type="text" placeholder="Username" />
          <input name="password" type="password" placeholder="Password" />
          <button disabled={isLoading}>Login</button>
          {error && <span>{error}</span>}
          <Link to="/register">{"Don't"} you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
};

export default Login;
