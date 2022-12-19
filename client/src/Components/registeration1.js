import React, {useState, useEffect} from 'react'
import { NavLink , useHistory} from 'react-router-dom'
import "./Registeration.css"

const Registeration = () => {

  const history = useHistory();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [rollno, setRollnumber] = useState("");
  const [fathername, setFathername] = useState("");
  const [dateofbirth, setDateofbirth] = useState("");
  const [branch, setBranch] = useState("");
  const [bloodgroup, setBloodgroup] = useState("");
  const [validtill, setValidtill] = useState("");
  const [mobileno, setMobileno] = useState("");
  const [email, setEmail] = useState("");
  const [parentmobilenumber, setParentmobilenumber] = useState("");
  const [parentemail, setParentemail] = useState("");
  const [currentaddress, setCurrentaddress] = useState("");
  const [district, setDistrict] = useState("");
  const [pincode, setPincode] = useState("")

  const PostData = async (e) => {
    e.preventDefault();
    const res = await fetch("/register", {
      method : "post",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({
        name : name, password : password, rollno : rollno, 
        fathername : fathername, dateofbirth : dateofbirth, branch : branch,
        bloodgroup : bloodgroup, validtill : validtill, mobileno : mobileno, 
        email : email, parentmobilenumber : parentmobilenumber, parentemail : parentemail, 
        currentaddress : currentaddress, district : district, pincode : pincode
      })
    });
    console.log("here");
    
    const data = await res.json();
    console.log(data);

    if(data.status === 422 || !data){
      window.alert("Invalid Registeration");
      console.log("Invalid Registeration");
    }else{
      // window.alert("Registeration successful");
      console.log("Registeration successful");
      history.push("/login"); 
    }

  }

  return (
    <div>
      <div className = "outer-form-div-register">
        <form>
          <div>
            <p><b>Name :</b></p>
            <input type = "text" name = "name" id = "Name-register" autoComplete = "on" placeholder='Name '
            onChange={(e) => setName(e.target.value)}/>
          </div>
          <div>
            <p><b>Password :</b></p>  
            <input type = "password" name = "password" id = "Password-register" autoComplete = "on" placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div>
            <p><b>RollNumber :</b></p> 
            <input type = "text" name = "rollno" id = "RollNumber-register" autoComplete = "on" placeholder='RollNumber'
            onChange={(e) => setRollnumber(e.target.value)}/>
          </div>
          <div>
            <p><b>FatherName :</b></p> 
            <input type = "text" name = "fathername" id = "FatherName-register" autoComplete = "on" placeholder='FatherName'
            onChange={(e) => setFathername(e.target.value)}/>
          </div>
          <div>
            <p><b>DateOfBirth :</b></p> 
            <input type = "date" name = "dateofbirth" id = "DateOfBirth-register" autoComplete = "on" placeholder='DateOfBirth'
            onChange={(e) => setDateofbirth(e.target.value)}/>
          </div>
          <div>
            <p><b>Branch :</b></p> 
            <input type = "text" name = "branch" id = "Branch-register" autoComplete = "on" placeholder='Branch'
            onChange={(e) => setBranch(e.target.value)}/>
          </div>
          <div>
            <p><b>BloodGroup :</b></p> 
            <input type = "text" name = "bloodgroup" id = "BloodGroup-register" autoComplete = "on" placeholder='BloodGroup'
            onChange={(e) => setBloodgroup(e.target.value)}/>
          </div>
          <div>
            <p><b>ValidTill :</b></p> 
            <input type = "date" name = "validtill" id = "ValidTill-register" autoComplete = "on" placeholder='ValidTill'
            onChange={(e) => setValidtill(e.target.value)}/>
          </div>
          <div>
            <p><b>MobileNumber :</b></p> 
            <input type = "text" name = "mobileno" id = "MobileNumber-register" autoComplete = "on" placeholder='MobileNumber'
            onChange={(e) => setMobileno(e.target.value)}/>
          </div>
          <div>
            <p><b>Email :</b></p> 
            <input type = "email" name = "email" id = "Email-register" autoComplete = "on" placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div>
            <p><b>ParentMobileNumber :</b></p>  
            <input type = "number" name = "parentmobilenumber" id = "ParentMobileNumber-register" autoComplete = "on" placeholder='ParentMobileNumber'
            onChange={(e) => setParentmobilenumber(e.target.value)}/>
          </div>
          <div>
            <p><b>ParentEmail :</b></p> 
            <input type = "email" name = "parentemail" id = "ParentEmail-register" autoComplete = "on" placeholder='ParentEmail'
            onChange={(e) => setParentemail(e.target.value)}/>
          </div>
          <div>
            <p><b>CurrentAddress :</b></p> 
            <input type = "text" name = "currentaddress" id = "CurrentAddress-register" autoComplete = "on" placeholder='CurrentAddress'
            onChange={(e) => setCurrentaddress(e.target.value)}/>
          </div>
          <div>
            <p><b>District :</b></p> 
            <input type = "text" name = "district" id = "District-register" autoComplete = "on" placeholder='District'
            onChange={(e) => setDistrict(e.target.value)}/>
          </div>
          <div>
            <p><b>Pincode :</b></p> 
            <input type = "text" name = "pincode" id = "Pincode-register" autoComplete = "on" placeholder='PinCode'
            onChange={(e) => setPincode(e.target.value)}/>
          </div>
          <div className='evaluate-button'>
            <input type = "submit" name = "register" id = "register-register" 
            value = "Register" onClick={PostData}/>
            <br/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Registeration