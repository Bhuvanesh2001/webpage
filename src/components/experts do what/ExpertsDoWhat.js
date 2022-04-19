import React from "react";
import "./ExpertsDoWhat.css";

export default function ExpertsDoWhat() {
  return (
    <div className="ExpertsDoWhat-mainDiv ">
      <div className="EligibilityRequirements-top-div">
        <hr className="hr-style" />
        <div className="heading">
          <h6 id="h6-ExpertsDoWhat">
            For all those SMART Ubergrads who would let the{" "}
            <span class="text-orange-500">EXPERTS</span> do what they do BEST!
          </h6>
        </div>
      </div>
      <div id="ExpertsDoWhat-Padding" class="shadow-box md:px-20 px-7">
        <div class="flex flex-col justify-center ">
          <p class="pb-2">
            Having questions? No issues. Our expert Counsellors are specially
            equipped and trained to answer all your questions / doubts patiently
            and to your complete satisfaction.
          </p>
          <p class="py-2 text-left ">
            Your{" "}
            <span class="font-bold text-1xl text-orange-500 ">
              ‘Dedicated Counsellor‘{" "}
            </span>
            would help you in the entire process – from ‘shortlisting’
            universities to finally ‘enrolling’ at your dream university (just a
            Phone call / WhatsApp / Email / SMS away).
          </p>
          <ul class="list-disc text-left">
            <li class="py-2">
              <span class="font-bold text-1xl text-orange-500 text-center">
                Profile Evaluation
              </span>{" "}
              - suggest a customised &amp; personalised “Best-Fit” University
              shortlist matching your profile (considering more than 42
              parameters).
            </li>
            <li class="py-2">
              <span class="font-bold text-1xl text-orange-500 text-center">
                SoPs, LoRs, Resumes
              </span>{" "}
              - proofreading, sharing samples, etc.
            </li>
            <li class="py-2">
              <span class="font-bold text-1xl text-orange-500 text-center">
                Information{" "}
              </span>{" "}
              on Application Fee waivers, GRE / IELTS waivers, deadlines, etc.
            </li>
            <li class="py-2">
              <span class="font-bold text-1xl text-orange-500 text-center">
                University Applications
              </span>{" "}
              - help with documentation, application form filling, special
              requirements, etc.
            </li>
            <li class="py-2">
              <span class="font-bold text-1xl text-orange-500 text-center">
                Tracking
              </span>{" "}
              and follow-up with University Partners for Offer/Admit, I-20, CAS,
              COE, etc.
            </li>
            <li class="py-2">
              <span class="font-bold text-1xl text-orange-500 text-center">
                Visa Process
              </span>{" "}
              - help with documentation, application form filling, mock
              one-on-one sessions, etc.
            </li>
          </ul>
          <div class="border-1 border-black">
            <div class="flex justify-center my-4 pt-4">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://calendly.com/ugcall/studyabroadcounselling?month=2021-11"
              >
                <button
                  class="MuiButtonBase-root MuiButton-root MuiButton-contained m-auto UGbuttonPrimary p-4 text-base first-letter:MuiButton-containedSizeLarge MuiButton-sizeLarge bg-orange-500 rounded-full hover:shadow-lg	"
                  tabindex="0"
                  type="button"
                >
                  <span id="Button-ExpertsDoWhat" class="MuiButton-label text-white">
                    TALK TO UBERGRAD COUNSELLOR
                  </span>
                  <span class="MuiTouchRipple-root"></span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
