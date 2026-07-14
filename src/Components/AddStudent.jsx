import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Nav from './Nav'




const AddStudent = () => {

    const [input, changeInput] = useState({
        name: "",
        dept: "",
        sem: "",
        course: "",
        Sno: "",
        loginTime: "",
        logoutTime: "",
        date: ""
    })


    const inputHandler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(input);

        axios.post("http://localhost:3000/add-data", input)
            .then((response) => {
                console.log(response.data);
                alert("Student Added Successfully");
            })
            .catch((error) => {
                console.log(error.response.data);
                console.log(error.response.status);
            });
    }
    return (
        <div>
            <Nav/>
            <div className="container">
                <div className="row">
                    <br></br>
                    <h1><strong>ADD STUDENTS</strong></h1>
                    <br></br>
                    <div className="col col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6-col-xxl-6">
                                <label className="form-label">Student Name</label>
                                <input type="text"
                                    className="form-control"
                                    name="name"
                                    value={input.name}
                                    onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6-col-xxl-6">
                                <label className="form-label">Department</label>
                                <input type="text"
                                    className="form-control"
                                    name="dept"
                                    value={input.dept}
                                    onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6-col-xxl-6">
                                <label className="form-label">Semester</label>
                                <input type="text"
                                    className="form-control"
                                    name="sem"
                                    value={input.sem}
                                    onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Course</label>
                                <select name="" id="" className="form-control" name="course" value={input.course} onChange={inputHandler}>
                                    <option value="Select mode">Select Mode</option>
                                    <option value="BCA">BCA</option>
                                    <option value="MCA">MCA</option>
                                    <option value="MBA">MBA</option>
                                    <option value="B-TECH">B-TECH</option>
                                    <option value="M-TECH">M-TECH</option>

                                </select>

                            </div>
                             <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6-col-xxl-6">
                                <label className="form-label">System.No</label>
                                <input type="text"
                                    className="form-control"
                                    name="Sno"
                                    value={input.Sno}
                                    onChange={inputHandler} />
                            </div>

                              <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label className="form-label">Login Time</label>
                                <input type="text"
                                    className="form-control"
                                    name="loginTime"
                                    value={input.loginTime}
                                    onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6-col-xxl-6">
                                <label className="form-label">LogOut Time</label>
                                <input type="text"
                                    className="form-control"
                                    name="logoutTime"
                                    value={input.logoutTime}
                                    onChange={inputHandler} />
                            </div>
                        
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6-col-xxl-6">
                                <label className="form-label">Date</label>
                                <input type="date"
                                    className="form-control"
                                    name="date"
                                    value={input.date}
                                    onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readValue}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddStudent