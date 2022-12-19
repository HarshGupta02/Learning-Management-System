import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';

const Home = () => {
  const history = useHistory();
  const [userData, setUserData] = useState({});

  const callHomePage = async () => {
    try{
      const res = await fetch("/home", {
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
    callHomePage();
  }, []);

  return (
    <>
        <div className="flex2">
          <div className="details">
            <ul>
              <li>Name: {userData.Name}</li>
              <li>Roll: {userData.RollNumber}</li>
              <li>Branch: {userData.Branch}</li>
              <li>Mobile No: {userData.MobileNumber}</li>
              <li>Blood Group: {userData.BloodGroup}</li>
              <li>Valid Till: {userData.ValidTill}</li>
            </ul>
          </div>
          <div className='table-1'>
          <tr>
              <th>Course Name</th>
              <th>Course Number</th>
            </tr>
            <tr>
              <td>Machine Learning</td>
              <td>UCS410</td>
            </tr>
            <tr>
              <td>Probability And Statistics</td>
              <td>UMA010</td>
            </tr>
            <tr>
              <td>Computer Organization And Architecture</td>
              <td>UCS410</td>
            </tr>
            <tr>
              <td>Network Programming</td>
              <td>UCS410</td>
            </tr>
            <tr>
              <td>Software Engineering</td>
              <td>UCS410</td>
            </tr>
          </div>

        </div>

        <div className="flex3">
          <div className="hostel_detail">
            <h5>Hostel Allocation Details</h5>
            <p>Hostel Allocated is : N/A</p>
          </div>
          <div className="fee_details">
            <h5>Fee Details</h5>
            <p>Fee Status: N/A</p>
          </div>
        </div>
    </>
  )
}

export default Home