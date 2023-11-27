import React from 'react'
import "./hero.scss"
import heroSideimg from "../../assets/images/home-page/hero-sideimg.png"
import Searchbar from '../searchbar/Searchbar'

const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-content">
            <h1>Find Internet And Cable TV Providers In Your Area</h1>
            <p>Please enter your ZIP or Browse by state to see providers in your <br/> area</p>
            <div className="form">
                <Searchbar />
            </div>
        </div>
        <div className="hero-sideimg">
            <img src={heroSideimg} alt="what localcableinternetphone provides" />
        </div>
    </div>
  )
}

export default Hero