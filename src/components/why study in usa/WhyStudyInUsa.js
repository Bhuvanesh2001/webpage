import React from 'react'
import "./WhyStudyInUsa.css"
import Bgimage from "../../assets/images/study_in_usa.jpg"

export default function WhyStudyInUsa() {
  return (
    <div style={{backgroundImage: `url(${Bgimage})` }} className='main-Div  text-center text-white '>
         <div className="EligibilityRequirements-top-div">
      
      <div className="heading">
        <h6>Why Study in the USA?</h6>
        <hr className='WhyStudyInUsa-hr-style'/>
        <br/>
        <p>The USA hosts 1.1+ million international students in its' world-class universities including 200,000+ Indian students</p>
        <br/><br/>

        <button
                  class="MuiButtonBase-root MuiButton-root MuiButton-contained m-auto UGbuttonPrimary p-2 text-base first-letter:MuiButton-containedSizeLarge MuiButton-sizeLarge bg-orange-500 rounded-full hover:shadow-lg px-5 text-white	"
                  tabindex="0"
                  type="button"
                >
                  <span class="MuiButton-label">
                    Top Universities in the USA
                  </span>
                  <span class="MuiTouchRipple-root"></span>
                </button>

      </div>


      </div>
    </div> 

  )
}
