import React from 'react'
import { useState } from 'react'
import "./Attendance.css"
import ClockLoader from 'react-spinners/SyncLoader';

const Attendance = () => {

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const [loading, setLoading] = useState(0);
    const takeAttendance = async (e) => {
        e.preventDefault();
        setLoading(1);
        const result = await fetch('http://localhost:5000/attendance');
        await sleep(25000);
        setLoading(2);
        const y = await result.json();
    }

    return (
        <>
            <div>
                {/* <div className='attendance'>
                <button type = "submit" id = "attendance" onClick={takeAttendance}>Take Attendance</button>
                </div> */}
                {
                loading === 0 ? <div className='attendance'><button type = "submit" id = "attendancebtn" onClick={takeAttendance}>Take Attendance</button></div>
                : loading === 1 ? <ClockLoader className="loader" size={15} color={'#000000'} loading={loading === 1}/>
                : <div className='after_payment'><h2>Your Attendance Has been marked successfully</h2></div>
                }
            </div>
        </>
    )
}

export default Attendance