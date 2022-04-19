import React from "react";
import "./Footer.css";
import Logo from "../../assets/images/ubergrad_logo_footer.png";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook'; 
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
export default function Footer() {
  return (
    <div>
      <div className="Footer-main-Div">
        <div className="About cursor-pointer">
          <p className="bhu">About Ubergrad</p>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Terms of Use</li>
            <li>Disclaimer</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="Countiries cursor-pointer">
          <p className="bhu">Countires</p>
          <ul>
            <li>Study in the USA</li>
            <li>Study in the UK</li>
            <li>Study in Canada</li>
            <li>Study in Australia</li>
            <li>Study in New Zealand</li>
            <li>Study in Ireland</li>
          </ul>
        </div>
        <div className="Universities cursor-pointer">
          <p className="bhu"> Universites</p>
          <ul>
            <li>Universities in the USA</li>
            <li>Universities in the UK</li>
            <li>Universities in Canada</li>
            <li>Universities in Australia</li>
            <li>Universities in New Zealand</li>
            <li>Universities in Ireland</li>
          </ul>
        </div>
        <div className="Exam cursor-pointer">
          <p className="bhu"> Exams</p>
          <ul>
            <li>GRE</li>
            <li>IELTS</li>
            <li>TOEFL</li>
            <li>GMAT</li>
            <li>Duolingo</li>
            <li>PTE</li>
          </ul>
        </div>
        <div className="Contact cursor-pointer">
          <p className="bhu">Contact</p>
          <ul>
            <li><span style={{color:"ffc107"}}>Call Us :</span> +91-9303-42-42-42</li>
            <li><span style={{color:"ffc107"}}>WhatsApp Us :</span> +91-9303-42-42-42</li>
            <li><span style={{color:"ffc107"}}>Mail Us :</span> hello@ubergrad.com</li>
          </ul>
          <br/>
          <img className="image-logo" src={Logo}></img>
        </div>
      </div>

      <div className="footer-div">
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            Copyright © 2022 Ubergrad India Pvt. Ltd. All rights reserved
          </div>
          <div className="footer-bottom-right cursor-pointer">
            <ul> 
              <li><FacebookIcon></FacebookIcon></li>
              <li><WhatsAppIcon></WhatsAppIcon></li>
              <li><InstagramIcon></InstagramIcon></li>
              <li><YouTubeIcon></YouTubeIcon></li>
              <li><LinkedInIcon></LinkedInIcon></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
