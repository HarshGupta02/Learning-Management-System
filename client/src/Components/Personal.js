import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import './Personal.css';

const Personal = () => {
  const history = useHistory();
  const [userData, setUserData] = useState({});

  const callPersonalPage = async () => {
    try{
      const res = await fetch("/personal", {
        method : "GET",
        headers : {
          Accept : "application/json",
          "Content-Type" : "application/json"
        },
        credentials : "include"
      });

      const data = await res.json();
      console.log(data);
      setUserData(data);

      if(!res.status === 200){
        const error = new Error(res.error);
        throw error;
      }

    }catch(err){
      console.log(err);
      history.push("/login");
    }
  }

  useEffect(() => {
    callPersonalPage();
  }, []);

    return (
        <>
            <h4 className="heading">Personal Information</h4>
            <table className="persondets">
             <tr className="table_info">
                <tr>
                    <td class="field-name">Name</td>
                    <td>{userData.Name}</td>
                </tr>
                <tr>
                    <td class="field-name">Roll Number</td>
                    <td>{userData.RollNumber}</td>
                </tr>
                <tr>
                    <td class="field-name">Father Name</td>
                    <td>{userData.FatherName}</td>
                </tr>
                <tr>
                    <td class="field-name">Date Of Birth</td>
                    <td>{userData.DateOfBirth}</td>
                </tr>
                <tr>
                    <td class="field-name">Branch</td>
                    <td>{userData.Branch}</td>
                </tr>
            </tr>
            </table>
            <h4 className="heading">Student Contact Details</h4>
            <table>
            <tr className="table_info">
                <tr>
                    <td class="field-name">Mobile Number</td>
                    <td>{userData.MobileNo}</td>
                </tr>
                <tr>
                    <td class="field-name">E-mail</td>
                    <td>{userData.Email}</td>
                </tr>
                <tr>
                    <td class="field-name">Parent Mobile Number</td>
                    <td>{userData.ParentMobileNumber}</td>
                </tr>
                <tr>
                    <td class="field-name">Parent Email</td>
                    <td>{userData.ParentEmail}</td>
                </tr>
            </tr>
            </table>
            <h4 className="heading">Address Details</h4>
            <table>
            <tr className="table_info">
                <tr>
                    <td class="field-name">Current Address</td>
                    <td>{userData.CurrentAddress}</td>
                </tr>
                <tr>
                    <td class="field-name">District</td>
                    <td>{userData.District}</td>
                </tr>
                <tr>
                    <td class="field-name">PinCode</td>
                    <td>{userData.PinCode}</td>
                </tr>
            </tr>
            </table>
        </> 
    )
}

export default Personal