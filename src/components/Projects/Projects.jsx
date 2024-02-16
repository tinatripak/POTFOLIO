import React from "react";
import classes from "./Projects.module.scss";

const Projects = () => {
  return (
    <section className={classes.projects} id="projects">
      <p className={classes.heading}>PROJECTS</p>
      <div className={classes.gridProjects}>
        <div className={`${classes.project} ${classes.firstProject}`}>
          <p className={classes.title}>Harmony</p>
          <div className={classes.photoBlock}>
            <img
              src={process.env.PUBLIC_URL + "/images/firstProject.png"}
              alt="Harmony project"
              className={classes.firstPhoto}
            />
            <div className={classes.buttons}>
              <a
                href="https://github.com/tinatripak/HarmonyMusicClient"
                className={classes.liveCodeButton}
              >
                Live code
              </a>
              <a
                href="https://harmony-music-client.vercel.app/login"
                className={classes.demoButton}
              >
                Demo
              </a>
            </div>
          </div>
          <p className={classes.description}>
            Discover and enjoy Ukrainian music on our convenient platform. Find
            artists, filter music and create personalized playlists. Discover
            your favorite songs and edit your profile. Immerse yourself in the
            bright world of Ukrainian melody!
            <br />
            <br />
            The site was built using the <span>MERN stack</span>, and I also
            used <span>Firebase</span> to authorize and store photos and music.
          </p>
        </div>

        <div className={`${classes.project} ${classes.secondProject}`}>
          <p className={classes.description}>
            This website is designed for a photographer as a personal portfolio.
            There you can view photo shoots made by this photographer and book a
            session right on the site. Check out the available types of photo
            shoots and transparent prices. Contact the photographer to ask any
            question you are interested in. <br />
            <br />
            The website was built using the <span>MERN stack</span>, and for
            storing photos in the database, I utilized <span>Cloudinary</span>.
          </p>
          <div className={classes.photoBlock}>
            <img
              src={process.env.PUBLIC_URL + "/images/secondProject.png"}
              alt="KSIGALLERY project"
              className={classes.secondPhoto}
            />
            <div className={classes.buttons}>
              <a
                href="https://github.com/tinatripak/photograph-portfolio-client"
                className={classes.liveCodeButton}
              >
                Live code
              </a>
              <a
                href="https://ksigallery.vercel.app"
                className={classes.demoButton}
              >
                Demo
              </a>
            </div>
          </div>
          <p className={classes.title}>KSIGALLERY</p>
        </div>
        <div className={`${classes.project} ${classes.thirdProject}`}>
          <p className={classes.description}>
            This is a one-page website with responsive design, navigation, a
            header consisting of a photo, menu, and text, a main block in the
            form of recommended products with prices, product categories, and a
            footer in the form of a photo. It was a project from the course.{" "}
            <br />
            <br />
            The web page was built using <span>React.js library</span>.
          </p>
          <div className={classes.photoBlock}>
            <img
              src={process.env.PUBLIC_URL + "/images/thirdProject.png"}
              alt="BOSE APP project"
              className={classes.thirdPhoto}
            />
            <div className={classes.buttons}>
              <a
                href="https://github.com/tinatripak/bose-react"
                className={classes.liveCodeButton}
              >
                Live code
              </a>
              <a
                href="https://bose-react.vercel.app"
                className={classes.demoButton}
              >
                Demo
              </a>
            </div>
          </div>
          <p className={classes.title}>BOSE APP</p>
        </div>

        <div className={`${classes.project} ${classes.fourthProject}`}>
          <p className={classes.title}>Auth web page</p>
          <div className={classes.photoBlock}>
            <img
              src={process.env.PUBLIC_URL + "/images/fourthProject.png"}
              alt="Auth web page project"
              className={classes.fourthPhoto}
            />
            <div className={classes.buttons}>
              <a
                href="https://github.com/tinatripak/HarmonyMusicClient"
                className={classes.liveCodeButton}
              >
                Live code
              </a>
              <a
                href="https://harmony-music-client.vercel.app/login"
                className={classes.demoButton}
              >
                Demo
              </a>
            </div>
          </div>
          <p className={classes.description}>
            This is an authentication page that uses Firebase for Google
            Authentication and authorization with email and password.
            <br />
            <br />
            The web page was built using <span>React.js library</span> and{" "}
            <span>Firebase</span>.
          </p>
        </div>

        <div className={`${classes.project} ${classes.firstProject}`}>
          <p className={classes.title}>BookStore Redux</p>
          <div className={classes.photoBlock}>
            <img
              src={process.env.PUBLIC_URL + "/images/bookstore.png"}
              alt="Bookstore project"
              className={classes.firstPhoto}
            />
            <div className={classes.buttons}>
              <a
                href="https://github.com/tinatripak/BookStoreRedux"
                className={classes.liveCodeButton}
              >
                Live code
              </a>
              <a
                href="https://bookstore-redux.vercel.app/"
                className={classes.demoButton}
              >
                Demo
              </a>
            </div>
          </div>
          <p className={classes.description}>
            This project was creating using <span>Redux</span> and{" "}
            <span>React</span> libraries to store books with id, name, price,
            category and description values in json and manipulate data like
            add, update and delete using reducers.
          </p>
        </div>

        <div className={`${classes.project} ${classes.secondProject}`}>
          <p className={classes.description}>
            This project was created using <span>Redux</span> and{" "}
            <span>React</span> libraries to be used in my future yoga website
            with videos and yoga plans. <span>Redux</span> was used to get
            information from the server and store it.
          </p>
          <div className={classes.photoBlock}>
            <img
              src={process.env.PUBLIC_URL + "/images/yoga.png"}
              alt="Yoga project"
              className={classes.secondPhoto}
            />
            <div className={classes.buttons}>
              <a
                href="https://github.com/tinatripak/YogaReduxClient"
                className={classes.liveCodeButton}
              >
                Live code
              </a>
              <a
                href="https://yoga-redux.vercel.app/"
                className={classes.demoButton}
              >
                Demo
              </a>
            </div>
          </div>
          <p className={classes.title}>Yoga Redux</p>
        </div>

        <div className={`${classes.project} ${classes.firstProject}`}>
          <p className={classes.title}>Yoga Website</p>
          <div className={classes.photoBlock}>
            <img
              src={process.env.PUBLIC_URL + "/images/yogawebsite.png"}
              alt="Yoga website project"
              className={classes.firstPhoto}
            />
            <div className={classes.buttons}>
              <a
                href="https://github.com/tinatripak/YogaWeb"
                className={classes.liveCodeButton}
              >
                Live code
              </a>
              <a
                href="https://yoga-namaste.vercel.app/"
                className={classes.demoButton}
              >
                Demo
              </a>
            </div>
          </div>
          <p className={classes.description}>
            The project is fullstack yoga website that uses the{" "}
            <span>Redux</span> and <span>React</span> libraries to store plans
            and videos and for all frontend. This client side is connected to
            the backend, which is written in Node.js
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
