import React from "react";
import { Date } from "../SocialMediaIcons";

import { EducationCardWrapper } from "./ExperienceStyle";

export function ExperienceCard({ experience }) {
  const keywordStyle = {
    padding: "8px",
    margin: "2px",
    border: "none",
    borderRadius: "10px",
    backgroundColor: "#222222",
    cursor: "pointer",
  };

  return (
    <EducationCardWrapper>
      <div>
        <Date />
        <p>{experience.date}</p>
      </div>
      <div className="header">
        <p>{experience.company}</p>
      </div>
      <div className="info">
        <p>{experience.title}</p>
      </div>
      <div className="info">
        <p>{experience.info}</p>
      </div>
      <div
        className="keywords"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {experience.keywords.map((item, key) => {
          return (
            <div className="keyword" style={keywordStyle}>
              {item}
            </div>
          );
        })}
      </div>
    </EducationCardWrapper>
  );
}

export function EducationCard({ education }) {
  return (
    <EducationCardWrapper>
      <div>
        <Date />
        <p>{education.date}</p>
      </div>
      <div className="header">
        <p>{education.school}</p>
      </div>
      <div className="info">
        <p>{education.major}</p>
      </div>
      <div className="info">
        <p>{education.info}</p>
      </div>
    </EducationCardWrapper>
  );
}
