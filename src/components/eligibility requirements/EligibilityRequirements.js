import React from "react";
import "./EligibilityRequirements.css";

export default function EligibilityRequirements() {
  return (
    <div className="main-div">
      <div className="EligibilityRequirements-top-div">
        <hr className="hr-style" />
        <div className="heading">
          <h6>Eligibility Requirements</h6>
        </div>
      </div>

      <div className="EligibilityRequirements-bottom-div ">
        <div className="box MuiPaper-root MuiCard-root  rounded-lg shadow-lg h-full px-4 py-4 bg-white text-black  MuiPaper-elevation1 MuiPaper-rounded">
          <div className="first-box-top">Average Score</div>
          <div class="flex flex-row justify-around">
            <div class="p-2 ">
              <p>GRE</p>
              <div class="text-orange-500 text-center text-2xl">303</div>
            </div>
            <div class="p-2 ">
              <p>TOEFL</p>
              <div class="text-orange-500 text-center text-2xl">82</div>
            </div>
            <div class="p-2 ">
              <p>IELTS</p>
              <div class="text-orange-500 text-center text-2xl">6</div>
            </div>
          </div>
        </div>

        <div className="box MuiPaper-root MuiCard-root  rounded-lg shadow-lg h-full px-4 py-4 bg-white text-black  MuiPaper-elevation1 MuiPaper-rounded">
          <div className="first-box-top">Documents Required</div>
          <div className="first-box-top-list">
            <li>Proof of Financial Support</li>
            <li>Academic Details</li>
            <li>Statement of Purpose (SoP)</li>
            <li>Letter of Recommendation (LoR)</li>
          </div>
        </div>
        <div className="box MuiPaper-root MuiCard-root  rounded-lg shadow-lg h-full px-4 py-4 bg-white text-black  MuiPaper-elevation1 MuiPaper-rounded">
          <div className="first-box-top">Visa Requirements</div>
          <div className="first-box-top-list">
            <p>F1 Student Visa for Full-time International Students</p>
            <li>
              F1 Student Visa Fee :{" "}
              <span style={{ color: "red" }}>$360 (approx. ₹ 26,900)</span>
            </li>
            <li>
              Application Fee :
              <span style={{ color: "red" }}> $160 (approx. ₹ 11,950)</span>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}
