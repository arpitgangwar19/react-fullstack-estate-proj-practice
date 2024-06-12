import React, { useState } from "react";
import "./ProfileUpdatePage.scss";
import { userContext } from "../../context/UserContext";
import apiRequest from "../../lib/apiRequest";
import CloudinaryUploadWidget from "../../components/UploadWidget/UploadWidget";

const ProfileUpdatePage = () => {
  const { currentUser, updateUser } = userContext();
  const [ avatar, setAvatar ] = useState([]);
  const [error, setError] = useState("");
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { username, email, password } = Object.fromEntries(formData);
    try {
      const res = await apiRequest.put(`/users/${currentUser.id}`, {
        username,
        email,
        password,
        avatar:avatar[0]
      });
      updateUser(res.data);
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    }
  };
  return (
    <div className="profileUpdatePage">
      <div className="formContainer">
        <form onSubmit={handleFormSubmit}>
          <h1>Update Profile</h1>
          <div className="item">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              defaultValue={currentUser.username}
            />
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email"  defaultValue={currentUser.email} />
          </div>
          <div className="item">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
             
            />
          </div>
          <button>Update</button>
          {error && <span>error</span>}
        </form>
      </div>
      <div className="sideContainer">
        <img
          src={avatar[0] || currentUser.avatar || "/noavatar.jpg"}
          alt=""
          className="avatar"
        />
        <CloudinaryUploadWidget uwConfig={{cloudName:"dp5efxqqf",
         uploadPreset:"react-estate-upload-bucket"
         ,multiple :false,
          maxImageFileSize:2000000,
          folder:"avtars",
          
          }} setState={setAvatar}/>

        
      </div>
    </div>
  );
};

export default ProfileUpdatePage;
