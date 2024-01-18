import React from "react";
import classes from "./Skills.module.scss";

const Skills = () => {
  return (
    <section className={classes.skills} id="skills">
      <h2 className={classes.heading}>Skills</h2>

      <div className={classes.content}>
        <div className={classes.mongoIcon}>
          <img
            src={process.env.PUBLIC_URL + "/images/mongoIcon.png"}
            alt="mongo icon"
          />
        </div>
        <div className={classes.orangeIcon}></div>
        <div className={classes.purpleIcon}></div>
        <div className={classes.tailwindIcon}>
          <img
            src={process.env.PUBLIC_URL + "/images/tailwindIcon.png"}
            alt="tailwind icon"
          />
        </div>
        <div className={classes.basicIcon}>
          <img
            src={process.env.PUBLIC_URL + "/images/basicIcon.png"}
            alt="html css js icon"
          />
        </div>
        <div className={classes.reactIcon}>
          <img
            src={process.env.PUBLIC_URL + "/images/reactIcon.png"}
            alt="react icon"
          />
        </div>
        <div className={classes.scssIcon}>
          <img
            src={process.env.PUBLIC_URL + "/images/scssIcon.png"}
            alt="scss icon"
          />
        </div>
        <div className={classes.lightPinkIcon}></div>
        <div className={classes.darkPinkIcon}></div>
        <div className={classes.nodeIcon}>
          <img
            src={process.env.PUBLIC_URL + "/images/nodeIcon.png"}
            alt="node icon"
          />
        </div>
        <div className={classes.postmanIcon}>
          <img
            src={process.env.PUBLIC_URL + "/images/postmanIcon.png"}
            alt="postman icon"
          />
        </div>
        <div className={classes.expressIcon}>
          <img
            src={process.env.PUBLIC_URL + "/images/expressIcon.png"}
            alt="express icon"
          />
        </div>
        <div className={classes.pinkIcon}></div>
        <div className={classes.figmaIcon}>
          <img
            src={process.env.PUBLIC_URL + "/images/figmaIcon.png"}
            alt="figma icon"
          />
        </div>
        <div className={classes.bootstrapIcon}>
          <img
            src={process.env.PUBLIC_URL + "/images/bootstrapIcon.png"}
            alt="bootstrap icon"
          />
        </div>
        <div className={classes.blueIcon}></div>

        <div className={classes.girlIcon}>
          <img
            src={process.env.PUBLIC_URL + "/images/womanWithComputer.png"}
            alt="woman with computer icon"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
