import React from "react";
import "./HomePage.scss";
import SearchBar from "../../components/SearchBar/SearchBar";
import { userContext } from "../../context/UserContext.jsx";

const HomePage = () => {
  const { currentUser } = userContext();
  console.log(currentUser);
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate and get your dream place</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
            praesentium doloremque cupiditate atque, porro, est delectus
            accusamus veritatis neque vitae placeat eius quibusdam dolorum ipsam
            temporibus dolores hic voluptate quasi?
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Expirence</h2>
            </div>
            <div className="box">
              <h1>200+</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" />
      </div>
    </div>
  );
};

export default HomePage;
