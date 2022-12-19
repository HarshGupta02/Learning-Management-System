import React, {useState, useEffect} from 'react';
import logo from '../Photos/LMS.png';
import "./Header.css";
import "./Login.css";
import "./Registeration.css";

const Header = () => {
  return(
    <>
    <div className="outer">
      <img className="logo_img" src={logo} alt="Logo" />
      <h3 className="text1">Thapar Institute Of Engineering And Technology</h3>
      {/* <div className="sign_details">
        <button type ="button" className="btn btn-outline-secondary" >Register</button>
        <button type ="button" className="btn btn-outline-secondary" id = "middle">Login</button>
        <button type ="button" className="btn btn-outline-secondary" id = "right">Logout</button>
      </div> */}
    </div>
    </>
)
}

export default Header