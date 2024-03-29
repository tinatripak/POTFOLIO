import React from 'react'
import Header from '../Header/Header'
import classes from './Home.module.scss'
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <section className={classes.home} id='top'>
      <div>
        <Header/>
      </div>
      <div className={classes.main}>
        <div className={classes.text}>
          <p className={classes.fullName}>Kristina Tripak</p>
          <Typewriter
          className={classes.position}
            options={{
              strings: ['Front-end Developer'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className={classes.photo}>
          <img src={process.env.PUBLIC_URL + '/images/myPhoto.png'} alt="Kristina Tripak" />
        </div>

        {/* <div className={classes.photo}>
          <img src={process.env.PUBLIC_URL + '/images/photoWithMe.png'} alt="Kristina Tripak" className={classes.zIndex}/>
          <div className={`${classes.backgroung} ${classes.zIndex}`}>
            <div className={classes.firstRectangle}></div>
            <div className={classes.secondRectangle}></div>
            <div className={classes.thirdRectangle}></div>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Home