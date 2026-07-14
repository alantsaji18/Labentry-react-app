import axios from 'axios'
import React, { useEffect, useState } from 'react'





const ViewStudent = () => {
    const [data,changeData] = useState([])
    const fetchData =()=>{
        axios.get("http://localhost:3000/view-data").then(
            (response) => {
                changeData(response.data)
            }
        ).catch()
    }
    useEffect(
        () => {
            fetchData()
        },[]
    )
  return (
    <div>

            <div className="container mt-4">
        <h2 className="text-center mb-4">
          <b>View Cars</b>
        </h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Department</th>
              <th scope="col">Semester</th>
              <th scope="col">Course</th>
              <th scope="col">System N.o</th>
              <th scope="col">Login Time</th>
              <th scope="col">Logout Time</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          
                <tbody>
                  {
                    data.map
                    (
                        (value,index)=>{
                            return(
                                <tr>
                                    <td>{value.name}</td>
                                    <td>{value.dept}</td>
                                    <td>{value.sem}</td>
                                    <td>{value.course}</td>
                                    <td>{value.Sno}</td>
                                    <td>{value.loginTime}</td>
                                    <td>{value.logoutTime}</td>
                                    <td>{value.date}</td>
                                </tr>
                            )
                        }

                    )}
          </tbody>
             
          
        </table>
      </div>


    </div>
  )
}

export default ViewStudent;