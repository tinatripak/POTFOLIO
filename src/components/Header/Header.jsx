import React, { useEffect, useState } from "react";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import classes from "./Header.module.scss";
import { Link, animateScroll as scroll } from "react-scroll";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 850) {
      setMenuOpen(false);
    }
  }, [size.width]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  return (
    <header className={classes.header}>
      <div className={classes.content}>
        <Link to="top" smooth={true} duration={500} className={classes.logo}>
          KTri
        </Link>
        <nav
          className={`${classes.nav} ${
            menuOpen && size.width < 850 ? classes.isMenu : ""
          }`}
        >
          <ul>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                activeClass={classes.activeLink}
                onClick={menuToggleHandler}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                spy={true}
                activeClass={classes.activeLink}
                onClick={menuToggleHandler}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                spy={true}
                activeClass={classes.activeLink}
                onClick={menuToggleHandler}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                activeClass={classes.activeLink}
                className={classes.liContact}
                onClick={menuToggleHandler}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className={classes.toggle}>
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} className={classes.close}/>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;