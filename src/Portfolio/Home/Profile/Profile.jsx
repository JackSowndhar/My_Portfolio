import React from "react";
import "./Profile.scss";
import myImage from "../../image/me.jpg"; 

const Profile = () => {
  return (
    <section className="profile" id="home">
      <div className="profile-container">
        <div className="profile-image">
          <img src={myImage} alt="Sowndhar" />
        </div>
        <div className="profile-text">
          
          <h2 className="name">SOWNDHAR M</h2>
          <h1 className="title">WEB DEVELOPER</h1>
          <p className="desc">
            I’m a passionate Front-End & Java Developer who builds clean,
            responsive, and scalable websites and applications. I love turning
            real-world problems into beautiful code!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
