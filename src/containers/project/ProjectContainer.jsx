import React, { useContext, useEffect } from "react";
import styles from "./ProjectContainer.scss";
import foto from "../../assets/images/foto-pessoal.jpeg";
import github from "../../assets/images/github-sign.png";
import linkedin from "../../assets/images/linkedin.png";
import wpp from "../../assets/images/whatsapp.png";

import LanguageContext from "../../context/LanguageContext";
import { menuContent } from "../../assets/data";

const ProjectContainer = () => {
  const { language } = useContext(LanguageContext);

  const pageInfo = menuContent.items.filter((e) => e.path === "/project")[0];

  const whatText = "This is the first line. \n\r This is the second line.";

  return (
    <div className="project-container">
      <div className="about-project">
        <div className="about-text-content">
          <h2>{pageInfo.containerText.what.title[language]}</h2>
          <p>{whatText}</p>
        </div>
        <div className="about-process">
          <h2>{pageInfo.containerText.process.title[language]}</h2>
          <p></p>
        </div>
      </div>
      <hr></hr>
      <div className="about-me">
        <div className="left-content">
          <img className="photo" src={foto} />
          <div className="about-me-info">
            <div className="text-info">
              <h4 className="my-name">Rafael Reis Araújo</h4>
              <p className="job-title">Frontend Developer</p>
              <p className="email">reis.rafael18@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="about-me-social">
          <a href="https://github.com/rafa-ra" target="_blank">
            <img className="icons" src={github} />
          </a>
          <a href="https://linkedin.com/in/rafaelreisaraujo" target="_blank">
            <img className="icons" src={linkedin} />
          </a>
          <a href="https://wa.me/+5531991457040" target="_blank">
            <img className="icons" src={wpp} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectContainer;
