/* eslint-disable no-unused-vars */
import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <p>All rights Reserved by AYUSH AARAMBH</p>
      <ul>
        <li>Terms of Service</li>
        <li>Terms of policy</li>
      </ul>
      <section id="contact-us">
        <div className="contactt">
          <h3>Stay Connected</h3>
          <p>Follow us on social media to stay updated with the latest from AYUSH.</p>
          <div className="social-links">
            <a href="https://x.com/moayush" target="_blank" ><img src="/assets/twitter.png" alt="" />Twitter</a>
            <a href="https://www.instagram.com/ministryofayush/" target="_blank"><img src="/assets/instagram.png" alt="" />Instagram</a>
            <a href="https://www.youtube.com/@MinistryofAYUSHofficial" target="_blank"> <img src="/assets/yt1.png" alt="" />YouTube</a>
            <a href="https://www.facebook.com/moayush/" target="_blank"> <img src="/assets/fb.png" alt="" />Facebook</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
