import React from "react";
import "./MoreStatusOnUsa.css";
import College from "../../assets/icons/home.png";
import Students from "../../assets/icons/people.png";
import Man from "../../assets/icons/man.png";
import Business from "../../assets/icons/bud.png";
import Analysis from "../../assets/icons/computerScience.png";
import Timer from "../../assets/icons/timer.png";
import Calender from "../../assets/icons/calender.png";

export default function MoreStatusOnUsa() {
  return (
    <div className="MoreStatusOnUsa-main-Div">
      <div className="EligibilityRequirements-top-div">
        <hr className="hr-style" />
        <div className="heading">
          <h6>More stats on the USA and its education</h6>
        </div>
      </div>

      <div id="container-id2" className="MoreStatusOnUsa-gridContainer1 ">
        <div
          id="class"
          className="container1-box MuiPaper-root MuiCard-root  rounded-lg shadow-lg h-full px-4 py-4 bg-white text-black  MuiPaper-elevation1 MuiPaper-rounded"
        >
          <div className="container1-box-grid">
            <div className="container1-box-grid-top-div">
              <h>
                <span style={{ color: "red" }}>30</span>/100
              </h>
              <p id="For-text-align">
                30 universities among top 100 across the world
              </p>
            </div>
            <div className="container1-box-grid-right-div">
              <img src={College}></img>
            </div>
          </div>
        </div>
        <div className="container1-box MuiPaper-root MuiCard-root  rounded-lg shadow-lg h-full px-4 py-4 bg-white text-black  MuiPaper-elevation1 MuiPaper-rounded">
          <div className="container1-box-grid ">
            <div className="container1-box-grid-top-div">
              <h>
                <span style={{ color: "red" }}>211,930</span>
              </h>
              <p id="For-text-align">Number of Indian students in the USA</p>
            </div>
            <div className="container1-box-grid-right-div">
              <img src={Students}></img>
            </div>
          </div>
        </div>
        <div className="container1-box MuiPaper-root MuiCard-root  rounded-lg shadow-lg h-full px-4 py-4 bg-white text-black  MuiPaper-elevation1 MuiPaper-rounded">
          <div className="container1-box-top">Most Preferred Courses</div>
          <hr />

          <div className="container1-box-bottom">
            <div className="for-responsive">
              <div className="box1-top">
                <img src={Man} style={{ height: "36px", width: "36px" }}></img>
                <p>Engineering</p>
              </div>
              <div className="box1-top">
                <img
                  src={Business}
                  style={{ height: "36px", width: "36px" }}
                ></img>
                <p>Business</p>
              </div>
            </div>

            <div className="for-responsive">
              <div className="container1-box-bottom-box1">
                <div className="box1-top">
                  <img
                    src={Analysis}
                    style={{ height: "36px", width: "36px" }}
                  ></img>
                  <p>Computer Science &amp; IT</p>
                </div>
              </div>
              <div className="container1-box-bottom-box1">
                <div className="box1-top">
                  <img
                    src={Analysis}
                    style={{ height: "36px", width: "36px" }}
                  ></img>
                  <p>Business Analytics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="MuiContainer-root h-full MuiContainer-maxWidthLg">
        <div class="h-full">
          <div class="grid md:grid-cols-3 gap-4 h-full text-center px-8">
            <div class="md:col-span-1 border-r-0 border-white border-solid">
              <div class="MuiPaper-root MuiCard-root rounded-lg shadow-lg h-full px-auto pb-10 py-auto my-auto bg-white  MuiPaper-elevation1 MuiPaper-rounded">
                <div class="text-lg font-bold py-4">
                  Approximate Tuition Fee Per Year
                </div>
                <div class="relative h-2 w-3/5 mx-auto my-5 mb-8 bg-gray-400 rounded max-w-xs border-1 border-white border-solid ">
                  <div class="absolute h-4 w-2 rounded bg-orange-600 -top-1 left-1"></div>
                  <div class="absolute h-4 w-2 rounded bg-orange-600 -top-1 right-1"></div>
                </div>
                <div class="relative w-5/5 mx-auto mb-8 ">
                  <div class="absolute h-4 -top-1 left-2">
                    $15,000
                    <div class="text-orange-600">Aprx.₹11.5 L</div>
                  </div>
                  <div class="absolute h-4 -top-1 right-2">
                    $30,000 <div class="text-orange-600">Aprx.₹20.5 L</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="md:col-span-1 border-r-0 border-white border-solid">
              <div class="MuiPaper-root MuiCard-root rounded-lg shadow-lg h-full pb-10 px-auto py-auto my-auto bg-white MuiPaper-elevation1 MuiPaper-rounded">
                <div class="text-lg font-bold py-4">
                  {" "}
                  Approximate Living Expenses Per Year
                </div>
                <div class="relative h-2 w-3/5 mx-auto my-5 mb-8 bg-gray-400 rounded max-w-xs border-1 border-white border-solid">
                  <div class="absolute h-4 w-2 rounded bg-orange-600 -top-1 left-1"></div>
                  <div class="absolute h-4 w-2 rounded bg-orange-600 -top-1 right-1"></div>
                </div>
                <div class="relative w-5/5 mx-auto mb-8 ">
                  <div class="absolute h-4 -top-1 left-2">
                    {" "}
                    $10,000<div class="text-orange-600">Aprx.₹7.5 L</div>
                  </div>
                  <div class="absolute h-4 -top-1 right-2">
                    $18,000 <div class="text-orange-600">Aprx.₹13.8 L</div>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div class="md:col-span-1 border-r-0 border-white border-solid">
              <div class="MuiPaper-root MuiCard-root  rounded-lg shadow-lg h-full px-4 py-4 bg-white text-black  MuiPaper-elevation1 MuiPaper-rounded">
                <div class="text-lg font-bold pb-4">Quality of Life</div>
                <div class="">
                  <div class="text- 2xl w-20 mx-auto rounded-lg shadow-lg p-4 bg-orange-600">
                    #17
                  </div>
                </div>
                <div class="text-center my-2">
                  U.S. News &amp; World Report : Quality of Life Rankings
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div class="MuiContainer-root h-full MuiContainer-maxWidthLg pt-10">
        <div id="Card-Container-MS" class=" h-full">
          <div class="grid md:grid-cols-2 gap-4 h-full text-center">
            <div className="Card-box">
              <div id="id-4-MoreStatus" class="MuiPaper-root MuiCard-root rounded-lg bg-white shadow-lg rounded h-full p-4 MuiPaper-elevation1 MuiPaper-rounded">
                <div class="text-lg font-bold pb-4">Part Time Jobs</div>
                <div class="text-xl pb-4">
                  <div id="Timer-in-MoreStats">
                    <img
                      style={{
                        height: "40px",
                        width: "40px",
                        textAlign: "center",
                      }}
                      src={Timer}
                    ></img>
                    20 Hours
                  </div>
                </div>
                <div class="text-center">
                  You can work 20 hours per week as part of your CPT/OPT
                  Programs
                </div>
              </div>
            </div>
            <div class="md:col-span-1 md:border-r-0 border-white border-solid">
              <div id="id-4-MoreStatus" class="MuiPaper-root MuiCard-root rounded-lg bg-white shadow-lg h-full p-4 MuiPaper-elevation1 MuiPaper-rounded">
                <div class="text-lg font-bold pb-4">
                  Post Study Work Duration
                </div>
                <div
                  id="Timer-in-MoreStats"
                  class="text-xl align-middle px-40 mx-22"
                >
                  <img
                    style={{
                      height: "40px",
                      width: "40px",
                      textAlign: "center",
                    }}
                    src={Calender}
                  ></img>
                  36 Months
                </div>
                <div class="text-center">
                  Upon graduating, STEM students can apply for an extension of
                  their OPT (usually it is 12 months) and can work for up to 36
                  months.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
