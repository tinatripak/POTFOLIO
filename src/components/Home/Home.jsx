import React from 'react'
import Header from '../Header/Header'
import classes from './Home.module.scss'

const Home = () => {
  return (
    <section className={classes.home} id='top'>
      <div>
        <Header/>
      </div>
      <div className={classes.main}>
        <div className={classes.text}>
          <p className={classes.fullName}>Kristina Tripak</p>
          <p className={classes.position}>Front-end Developer</p>
        </div>
        <div className={classes.photo}>
          <img src={process.env.PUBLIC_URL + '/images/myPhoto.png'} alt="Kristina Tripak" />
        </div>
      </div>
    </section>
  )
}

export default Home