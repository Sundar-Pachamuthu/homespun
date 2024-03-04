import React from 'react'
import './Hero.css';
import logo from '../Assets/logo_big.png';

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left' >
          <h1>here we will display front banner </h1>
        </div>
        <div className="hero-right">
          <img src={logo} alt="" />
        </div>
    </div>
  )
}

export default Hero
