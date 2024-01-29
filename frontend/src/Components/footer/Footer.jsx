// Footer.jsx
import React from 'react';
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_logo from '../Assets/instagram_icon.png'
import pintester_logo from '../Assets/pintester_icon.png'
import whatsapp_logo from '../Assets/whatsapp_icon.png'

const Footer = () => {
  // Your shop component logic here

  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <div>SHOOPER</div>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offers</li>
            <li>Contact</li>
            <li>About</li>
        </ul>
        <div className="footer-social-links">
            <div className="footers-items-container">
                <img src={instagram_logo} alt="" />
            </div>
            <div className="footers-items-container">
                <img src={pintester_logo} alt="" />
            </div>
            <div className="footers-items-container">
                <img src={whatsapp_logo} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2024 All Right Reserved</p>
        </div>
    </div>
  );
};

export default Footer;
