import React, {useState, useContext} from 'react';
import { useHistory } from 'react-router-dom';
import "./Login.css";
import { UserContext } from '../App';

const Login = () => {

  const {state, dispatch} = useContext(UserContext);
  const history = useHistory();
  const [rollno, setRollnumber] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch("/login", {
      method : "post",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({
        rollno, password
      })
    });

    const data = res.json();
    if(res.status === 422 || !data){
      window.alert("Invalid Credentials");
      console.log("Invalid Credentials");
    }else{
      dispatch({type : "USER", payload: true});
      console.log("Login successful");
      history.push("/home");
    }

  }

  return (
    <div>
      <div className = "outer-form-div-login">
        <form>
          <div className='student_header'><h2>STUDENT</h2></div>
          <div class="form-item">
            <p><b>Roll Number :</b></p>
            <input type = "text" name = "rollnumber" id = "RollNumber-login" autoComplete = "off"
            value = {rollno} onChange = {(e) => setRollnumber(e.target.value)} placeholder='Roll Number'/>
          </div>
         <br />
          <div class="form-item">
            <p><b>Password :</b></p>
            <input type = "password" name = "password" id = "Password-login" autoComplete = "off"
            value = {password} onChange = {(e) => setPassword(e.target.value)} placeholder='Password'/>
          </div>
          <div className='submit-login'>
            <input type = "submit" name = "login" id = "Login" value = "Login" onClick={loginUser}/> 
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login