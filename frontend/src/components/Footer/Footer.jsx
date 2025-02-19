import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas voluptatum autem deleniti ad quisquam impedit eos temporibus ipsum excepturi deserunt!</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>Comapany</h2>
                <ul>        
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get In Touch</h2>
                <ul>
                    <li>+91-7894563210</li>
                <li>contact@tomato.com</li>
                </ul>
            </div>
            
        </div>
            <hr />
        <p className="footer-copyright">Copyright 2025 © Tomato.com -All Rights Reserved</p>
    </div>
    
  )
}

export default Footer