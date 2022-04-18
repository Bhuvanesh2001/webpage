import React from "react";
import "./EligibilityRequirements.css";

export default function EligibilityRequirements() {
  return (
    // <div className="main-div">
    //   <div className="EligibilityRequirements-top-div">
    //     <hr className="hr-style" />
    //     <div className="heading">
    //       <h6>Eligibility Requirements</h6>
    //     </div>
    //   </div>

    //   <div className="EligibilityRequirements-bottom-div ">
    //     <div className="box MuiPaper-root MuiCard-root  rounded-lg shadow-lg h-full px-4 py-4 bg-white text-black  MuiPaper-elevation1 MuiPaper-rounded">
    //       <div className="first-box-top">Average Score</div>
    //       <div class="flex flex-row justify-around">
    //         <div class="p-2 ">
    //           <p>GRE</p>
    //           <div class="text-orange-500 text-center text-2xl">303</div>
    //         </div>
    //         <div class="p-2 ">
    //           <p>TOEFL</p>
    //           <div class="text-orange-500 text-center text-2xl">82</div>
    //         </div>
    //         <div class="p-2 ">
    //           <p>IELTS</p>
    //           <div class="text-orange-500 text-center text-2xl">6</div>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="box MuiPaper-root MuiCard-root  rounded-lg shadow-lg h-full px-4 py-4 bg-white text-black  MuiPaper-elevation1 MuiPaper-rounded">
    //       <div className="first-box-top">Documents Required</div>
    //       <div className="first-box-top-list">
    //         <li>Proof of Financial Support</li>
    //         <li>Academic Details</li>
    //         <li>Statement of Purpose (SoP)</li>
    //         <li>Letter of Recommendation (LoR)</li>
    //       </div>
    //     </div>
    //     <div className="box MuiPaper-root MuiCard-root  rounded-lg shadow-lg h-full px-4 py-4 bg-white text-black  MuiPaper-elevation1 MuiPaper-rounded">
    //       <div className="first-box-top">Visa Requirements</div>
    //       <div className="first-box-top-list">
    //         <p>F1 Student Visa for Full-time International Students</p>
    //         <li>
    //           F1 Student Visa Fee :{" "}
    //           <span style={{ color: "red" }}>$360 (approx. ₹ 26,900)</span>
    //         </li>
    //         <li>
    //           Application Fee :
    //           <span style={{ color: "red" }}> $160 (approx. ₹ 11,950)</span>
    //         </li>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="block p-5 space-y-2 ">
      <hr className="hr-style" />
      <h1 className="text-center font-semibold text-4xl pb-10">
        Eligibility Requirements
      </h1>
      <div className="flex flex-row justify-around space-x-3">
        <div className=" flex flex-col justify-around blockp-3 w-1/3 bg-white rounded-lg border border-gray-200 shadow-md">
          <h3 class=" text-xl font-semibold tracking-normal text-center">
            Average Scores
          </h3>
          {/* <div className="flex flex-row justify-around ">
            <div>
              <ul>
                <li className="text-sm">GRE</li>
                <li className="text-orange-600 text-2xl">303</li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="text-sm">TOFEL</li>
                <li className="text-orange-600 text-2xl">82</li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="text-sm">ILETS</li>
                <li className="text-orange-600 text-2xl">6</li>
              </ul>
            </div>
          </div> */}
          <div class="flex flex-row justify-around">
            <div class="p-2 ">
              <p>GRE</p>
              <div class="text-ug-secondary text-center text-2xl">303</div>
            </div>
            <div class="p-2 ">
              <p>TOEFL</p>
              <div class="text-ug-secondary text-center text-2xl">82</div>
            </div>
            <div class="p-2 ">
              <p>IELTS</p>
              <div class="text-ug-secondary text-center text-2xl">6</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between block p-3 w-1/3 bg-white rounded-lg border border-gray-200 shadow-md">
          <h5 className="font-semibold text-center text-xl">
            Documents Required
          </h5>
          <div className="pl-6">
            <ul className="list-disc text-sm">
              <li>Proof of Financial Support</li>
              <li>Academic Details</li>
              <li>Statement of Purpose (SoP)</li>
              <li>Letter of Recommendation (LoR)</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-around block p-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
          <h3 class=" text-xl tracking-normal text-center">
            <strong>Visa Requirements</strong>
          </h3>
          <div>
            {/* <p className="text-sm">
              F1 Student Visa for Full-time International Students
            </p>
            <ul className="text-sm list-disc pl-5">
              <li>F1 Student Visa Fee : $360 (approx. ₹ 26,900)</li>
              <li>Application Fee : $160 (approx. ₹ 11,950)</li>
            </ul> */}
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
