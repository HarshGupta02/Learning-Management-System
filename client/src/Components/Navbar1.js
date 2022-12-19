import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";
import { UserContext } from '../App';

const Navbar1 = () => {
  const {state, dispatch} = useContext(UserContext);

  const Menu = () => {
    if(state){
      return (
        <>
        <div>
          <div className='navbar1'>
            <li className="nav-item">
            <NavLink className="nav-link" to="/personal"><span class="nav-title">Register</span></NavLink>
            </li>
            </div>
        </div>
        </>
      )
    }else{
      return (
        <>
          <div className='navbar'>
            <li className="nav-item" id = "login">
            <NavLink className="nav-link" to="/login"><span class="nav-title">Login As Student</span></NavLink>
            </li>
            <li className="nav-item" id = "login">
            <NavLink className="nav-link" to="/loginadmin"><span class="nav-title">Login As Admin</span></NavLink>
            </li>
          </div>
        </>
      )
    }
  }

  return (
    <>
    <nav id="nav-contain" className="navbar navbar-expand-lg ">
    {/* <div id="nav-inner" className="container-fluid"> */}
        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0" id='nav'>
        <Menu />  
        </ul>
        </div>
    {/* </div> */}
    </nav>


    </>
  )
}

export default Navbar1;