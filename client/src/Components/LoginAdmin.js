import React, {useState, useContext} from 'react';
import { useHistory } from 'react-router-dom';
import "./LoginAdmin.css";
import { UserContext } from '../App';

const LoginAdmin = () => {

  const {state, dispatch} = useContext(UserContext);
  const history = useHistory();
  const [adminusername, setAdminusername] = useState('');
  const [password, setPassword] = useState('');

  const loginAdminUser = async (e) => {
    e.preventDefault();
    if(adminusername === "admin123" && password === "adminpassword"){
        history.push("/registeration");
    }else{
        alert('Wrong Credentials');
    }
  }

  return (
    <div>
      <div className = "outer-form-div-login">
        <div className='admin_header'><h2>ADMIN</h2></div>
        <form>
          <div class="form-item">
            <p><b>Admin Username :</b></p>
            <input type = "text" name = "adminusername" id = "RollNumber-login" autoComplete = "off"
            value = {adminusername} onChange = {(e) => setAdminusername(e.target.value)} placeholder='Admin Username'/>
          </div>
         <br />
          <div class="form-item">
            <p><b>Admin Password :</b></p>
            <input type = "password" name = "password" id = "Password-login" autoComplete = "off"
            value = {password} onChange = {(e) => setPassword(e.target.value)} placeholder='Password'/>
          </div>
          <div className='submit-login'>
            <input type = "submit" name = "login" id = "Login" value = "Login" onClick={loginAdminUser}/> 
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginAdmin