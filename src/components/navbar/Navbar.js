import React from "react";
import "./Navbar.css";
import Ubergrad from "../../assets/images/Ubergrad_transparent-logo.png";

export default function Navbar() {
  return (
    <div className="nav-div flex flex-row justify-between bg-yellow-400 p-2 text-center fixed w-full ">
      <div className="left-part float-left flex flex-row ">
        <img src={Ubergrad} className="h-12 w-13 px-20 cursor-pointer"></img>
      </div>

      <div >
        <div className="flex flex-grow align-middle gap-10 ">
          <button
            class="MuiButtonBase-root MuiButton-root MuiButton-contained m-auto UGbuttonPrimary p-2 text-base first-letter:MuiButton-containedSizeLarge MuiButton-sizeLarge bg-orange-500 rounded-full hover:shadow-lg px-5 text-white	"
            tabindex="0"
            type="button"
          >
            <span class="MuiButton-label pb-7">
              TALK TO UBERGRAD COUNSELLOR
            </span>
            <span class="MuiTouchRipple-root"></span>
          </button>
          <h3 className="cursor-pointer text-center">Login / Sign in</h3>
        </div>
      </div>
    </div>
  );
}
