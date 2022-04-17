import React from 'react'
import "./MoreStatusOnUsa.css"
import College from "../../assets/icons/home.png"
import Students from "../../assets/icons/people.png"
import Man from "../../assets/icons/man.png"
import Business from "../../assets/icons/business.png"
import Analysis from "../../assets/icons/computerScience.png"

export default function MoreStatusOnUsa() {
  return (
    <div className='MoreStatusOnUsa-main-Div'>
       <div className="EligibilityRequirements-top-div">
      <hr className='hr-style'/>
      <div className="heading">
        <h6>More stats on the USA and its education</h6>
      </div>
      </div>

      <div className="MoreStatusOnUsa-gridContainer1">
        <div className="container1-box">
          <div className="container1-box-grid">
            <div className="container1-box-grid-top-div">
            <h><span style={{color:"red"}}>30</span>/100</h>
            <p>30 universities among top 100 across the world</p>
            </div>
            <div className="container1-box-grid-right-div">
              <img src={College}></img>
            </div>
          </div>
        </div>
        <div className="container1-box">
        <div className="container1-box-grid">
            <div className="container1-box-grid-top-div">
            <h><span style={{color:"red"}}>211,930</span></h>
            <p>Number of Indian students in the USA</p>
            </div>
            <div className="container1-box-grid-right-div">
              <img src={Students}></img>
            </div>
          </div>
        </div>
        <div className="container1-box">
          <div className="container1-box-top">
          Most Preferred Courses
          </div>
          <hr/>
          <div className="container1-box-bottom">
            <div className="container1-box-bottom-box1">
              <div className="box1-top">
                <img src={Man}></img>
              </div>
              <p>Engineering</p>
            </div>
            <div className="container1-box-bottom-box1">
            <div className="box1-top">
                <img src={Business}></img>
              </div>
              <p>Business</p>
            </div>
            <div className="container1-box-bottom-box1">
            <div className="box1-top">
                <img src={Analysis}></img>
              </div>
              <p>Computer Science & IT</p>
            </div>
            <div className="container1-box-bottom-box1">
            <div className="box1-top">
                <img src={Analysis}></img>
              </div>
              <p>Business Analytics</p>
            </div>
          </div>
        </div>
      </div>  

      .
    </div>
  )
}
