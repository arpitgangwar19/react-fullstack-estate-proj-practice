import React, { useEffect } from "react";
import "./ProfilePage.scss";
import Chat from "../../components/Chat/Chat";
import List from "../../components/List/List";
import apiRequest from "../../lib/apiRequest";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../../context/UserContext";


const ProfilePage = () => {
  const navigate = useNavigate();
  const { currentUser, updateUser} = userContext();

  useEffect(()=>{
    if(currentUser==null)
      navigate("/login")
  },[currentUser,navigate])
  const handleClickLogout = async () => {
    try {
      const res = apiRequest.post("/auth/logout");
      localStorage.removeItem("user-details");
      updateUser(null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
  <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <Link to={"/profile/update"}><button>Update Profile</button></Link>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img
                src={currentUser.avatar || "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
                alt=""
              />
            </span>
            <span>
              Username: <b>{currentUser.data.username}</b>
            </span>
            <span>
              E-mail: <b>{currentUser.data.email}</b>
            </span>
            <button onClick={handleClickLogout}>Logout</button>
          </div>
          <div className="title">
            <h1>My List</h1>
           <Link to="/add">
           <button>Create New Post</button></Link>
          </div>
          <List />
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
