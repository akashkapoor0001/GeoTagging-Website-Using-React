import React from 'react';
import geotagging from '../../assets/geotagging.png'
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={geotagging} alt="gpt3_logo" />
        <p>GeoTagging, <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>GeoForce</p>
        <p>+91 98976XXXXX</p>
        <p>akashxxxxx@gmail.com
          jashanxxxxx@gmail.com
        </p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2024 GeoTagging. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;