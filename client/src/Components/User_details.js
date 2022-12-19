import React from "react";
import Details from './Details.js';

function User_details()
{
    return (
        <ul>
            <li>Name: {Details[0].name}</li>
            <li>Roll: {Details[0].roll}</li>
            <li>Branch: {Details[0].branch}</li>
            <li>Mobile No: {Details[0].mobile}</li>
            <li>Blood Group: {Details[0].blood}</li>
            <li>Valid Till: {Details[0].valid}</li>
        </ul>
    )
}
export default User_details;