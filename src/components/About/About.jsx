import React from "react";
import { HiArrowLongDown } from "react-icons/hi2";
import classes from "./About.module.scss";

const About = () => {
  return (
    <section className={classes.about} id="about">
      <div className={classes.text}>
        <p className={classes.firstParagraph}>
          Hey, I'm Kristina Tripak, a recent graduate in Software Engineering
          with a passion for front-end development. Though my professional
          journey is just starting, I've equipped myself with a solid foundation
          through university and two front-end courses.
        </p>
        <p className={classes.secondParagraph}>
          I love crafting visually appealing websites using the latest tech and
          clean design. While my work experience might be limited, my enthusiasm
          and commitment to staying updated make me an eager learner.
        </p>
        <div className={classes.line}></div>

        <div className={classes.gridCircles}>
          <div className={classes.smallBlueCircle}></div>
          <div className={classes.bigBlueCircle}></div>
          <div className={classes.purpleCircle}></div>
        </div>
      </div>
      <div className={classes.rightBlock}>
        <div className={classes.chronology}>
          <div className={classes.workExperience}>
            <p className={classes.title}>Front-end Program</p>
            <span className={classes.time}>Apr 2022- Jul 2022</span>
          </div>
          <div className={classes.icon}>
            <HiArrowLongDown size={40} />
          </div>
          <div className={classes.workExperience}>
            <p className={classes.title}>Harmony project</p>
            <span className={classes.time}>Mar 2023-May 2023</span>
          </div>
          <div className={classes.icon}>
            <HiArrowLongDown size={40} />
          </div>
          <div className={classes.workExperience}>
            <p className={classes.title}>
              Bachelor's degree of Software Engineering
            </p>
            <span className={classes.time}>Sep 2019- Jun 2023</span>
          </div>
          <div className={classes.icon}>
            <HiArrowLongDown size={40} />
          </div>
          <div className={classes.workExperience}>
            <p className={classes.title}>Practical React marathon</p>
            <span className={classes.time}>Aug 2022- Nov 2023</span>
          </div>
          <div className={classes.icon}>
            <HiArrowLongDown size={40} />
          </div>
          <div className={classes.workExperience}>
            <p className={classes.title}>Ksigallery project</p>
            <span className={classes.time}>Nov 2023- Jan 2024</span>
          </div>
        </div>
        <div className={classes.halfCircle}></div>
      </div>
    </section>
  );
};

export default About;
