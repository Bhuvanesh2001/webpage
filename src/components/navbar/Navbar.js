import React from "react";
import "./Navbar.css";
// import MenuIcon from '@mui/icons-material/Menu';
import Ubergrad from "../../assets/images/Ubergrad_transparent-logo.png";

export default function Navbar() {
  return (
    <div className="nav-div flex flex-row bg-yellow-400 p-2 text-center fixed w-full ">
      <div className="left-part float-left flex flex-row ">
        {/* <MenuIcon></MenuIcon> */}

        <img src={Ubergrad} className="h-12 w-13 px-20"></img>
      </div>

      <div class="text-sm font-medium text-center text-black border-b  border-orange">
        
      </div>
    </div>
  );
}
