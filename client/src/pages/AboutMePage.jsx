import React from "react";
import { Helmet } from "react-helmet";
import profileImage from "../../assets/images/profile.png";
import "../styles/AboutMePage.scss";

const AboutMePage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>About Me</title>
      </Helmet>
      <div className="profile-container">
        <span>ABOUTME</span>
        {/* <img className="profile-img" src={profileImage} alt="Profile" />
        <span className="profile-name">Abdul Akhundzada</span> */}
      </div>
    </React.Fragment>
  );
};

export default AboutMePage;
