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
        <div className="About">
          <p>About Ubergrad</p>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Terms of Use</li>
            <li>Disclaimer</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="Countiries">
          <p>Countires</p>
          <ul>
            <li>Study in the USA</li>
            <li>Study in the UK</li>
            <li>Study in Canada</li>
            <li>Study in Australia</li>
            <li>Study in New Zealand</li>
            <li>Study in Ireland</li>
          </ul>
        </div>
        <div className="Universities">
          <p> Universites</p>
          <ul>
            <li>Universities in the USA</li>
            <li>Universities in the UK</li>
            <li>Universities in Canada</li>
            <li>Universities in Australia</li>
            <li>Universities in New Zealand</li>
            <li>Universities in Ireland</li>
          </ul>
        </div>
        <div className="Exam">
          <p> Exams</p>
          <ul>
            <li>GRE</li>
            <li>IELTS</li>
            <li>TOEFL</li>
            <li>GMAT</li>
            <li>Duolingo</li>
            <li>PTE</li>
          </ul>
        </div>
        <div className="Contact">
          <p>Contact</p>
          <ul>
            <li><span >Call Us :</span> +91-9303-42-42-42</li>
            <li>WhatsApp Us : +91-9303-42-42-42</li>
            <li>Mail Us : hello@ubergrad.com</li>
          </ul>
          <br/>
          <img src={Logo}></img>
        </div>
      </div>

      <div className="footer-div">
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            Copyright © 2022 Ubergrad India Pvt. Ltd. All rights reserved
          </div>
          <div className="footer-bottom-right">
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
