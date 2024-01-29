// Shop.jsx
import React from 'react';
import './NewsLetter.css'

const NewsLetter = () => {
  // Your shop component logic here

  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On Your Mail</h1>
        <p>subcribe to our newsletter and stay updated</p>
        <div>
            < input type="email" placeholder='Your email id'></input>
            <button>Subscribe</button>

        </div>
    
    </div>
  );
};

export default NewsLetter;
