import React from 'react'
import "./Navbar.css"
import Ubergrad from "../../assets/images/Ubergrad_transparent-logo.png"

export default function Navbar() {
  return (
    <nav className=' static'>
    <div className='nav-div flex flex-row bg-yellow-500 text-center '>
      <div className='left-part float-left flex flex-row '>
        {/* <div className='menu hidden:sm '><svg class="MuiSvgIcon-root w-10 h-10" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg></div> */}
        <img src={Ubergrad} className='h-12 w-13 px-20'></img>
      </div>
    </div>
    </nav>
  )
}
