import React from 'react'
import time_table_data from './time_table_data'
import "./Timetable.css"
function Timetable() {
  return (
    <div className='master'>
        <table class="timetable">
            <thead>
                <tr>
                    <th>Time</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                </tr>
            </thead>
            <tbody>
                {
                    time_table_data.map((value,key) => {
                        return(
                            <tr key={key}>
                                <td className="cell">{value.time}</td>
                                <td>{value.day}</td>
                                <td>{value.code}</td>
                                <td>{value.course}</td>
                                <td>{value.Time}</td>
                                <td>{value.place}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table> 
    </div>
  )
}

export default Timetable
