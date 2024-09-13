import React from "react";
import { Helmet } from "react-helmet";
import EduEntry from "../components/EduEntry.jsx";
import "../styles/EducationPage.scss";
import eduData from "../static-data/education-data.jsx";

const EducationPage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Education</title>
      </Helmet>
      <div className="edu-list">
        {eduData.map((entry, index) => {
          return <EduEntry key={index} entry={entry} />;
        })}
      </div>
    </React.Fragment>
  );
};

export default EducationPage;
