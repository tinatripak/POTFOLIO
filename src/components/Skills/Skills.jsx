import React, { useEffect, useRef, useState } from "react";
import classes from "./Skills.module.scss";

const Skills = () => {
  const [isInViewport, setIsInViewport] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInViewport(true);
          observer.disconnect(); 
        }
      });
    }, options);

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);
  return (
    <section className={classes.skills} id="skills" ref={skillsRef}>
      <h2 className={classes.heading}>Skills</h2>

      <div className={`${classes.content}`}>
        <div className={`${classes.mongoIcon} ${classes.icon}  ${isInViewport ? classes.fadeIn : ""}`}>
          <img
            src={process.env.PUBLIC_URL + "/images/mongoIcon.png"}
            alt="mongo icon"
          />
        </div>
        <div className={classes.orangeIcon}></div>
        <div className={classes.purpleIcon}></div>
        <div className={`${classes.tailwindIcon} ${classes.icon}  ${isInViewport ? classes.fadeIn : ""}`}>
          <img
            src={process.env.PUBLIC_URL + "/images/tailwindIcon.png"}
            alt="tailwind icon"
          />
        </div>
        <div className={`${classes.basicIcon} ${classes.icon}  ${isInViewport ? classes.fadeIn : ""}`}>
          <img
            src={process.env.PUBLIC_URL + "/images/basicIcon.png"}
            alt="html css js icon"
          />
        </div>
        <div className={`${classes.reactIcon} ${classes.icon}  ${isInViewport ? classes.fadeIn : ""}`}>
          <img
            src={process.env.PUBLIC_URL + "/images/reactIcon.png"}
            alt="react icon"
          />
        </div>
        <div className={`${classes.scssIcon} ${classes.icon}  ${isInViewport ? classes.fadeIn : ""}`}>
          <img
            src={process.env.PUBLIC_URL + "/images/scssIcon.png"}
            alt="scss icon"
          />
        </div>
        <div className={classes.lightPinkIcon}></div>
        <div className={classes.darkPinkIcon}></div>
        <div className={`${classes.nodeIcon} ${classes.icon}  ${isInViewport ? classes.fadeIn : ""}`}>
          <img
            src={process.env.PUBLIC_URL + "/images/nodeIcon.png"}
            alt="node icon"
          />
        </div>
        <div className={`${classes.postmanIcon} ${classes.icon}  ${isInViewport ? classes.fadeIn : ""}`}>
          <img
            src={process.env.PUBLIC_URL + "/images/postmanIcon.png"}
            alt="postman icon"
          />
        </div>
        <div className={`${classes.expressIcon} ${classes.icon}  ${isInViewport ? classes.fadeIn : ""}`}>
          <img
            src={process.env.PUBLIC_URL + "/images/expressIcon.png"}
            alt="express icon"
          />
        </div>
        <div className={classes.pinkIcon}></div>
        <div className={`${classes.figmaIcon} ${classes.icon}  ${isInViewport ? classes.fadeIn : ""}`}>
          <img
            src={process.env.PUBLIC_URL + "/images/figmaIcon.png"}
            alt="figma icon"
          />
        </div>
        <div className={`${classes.bootstrapIcon} ${classes.icon} ${isInViewport ? classes.fadeIn : ""}`}>
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
