// Shop.jsx
import React from 'react';
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'


const Hero = () => {
  // Your shop component logic here

  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEW ARRIVAL ONLY</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>new</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>collection</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collections</div>
                <img src={arrow_icon} alt="" />
                </div>
        </div>
        <di className="hero-right">
            <img src={hero_image} alt="" />

        </di>

    </div>
  );
};

export default Hero;
