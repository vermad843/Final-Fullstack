import React from 'react';
import './Signup.css';

function Signup() {
    return (
        <div className = "wrapper">
            <div className = "form-wrapper">
                <h1>Login</h1>
                <form >
                  
                   <div className = "mobileNumber">
                       <label htmlFor = "mobileNumber">Mobile</label>
                       <input 
                          type = "number"
                          className = ""
                          placeholder = "Mobile Number"
                          name = "mobileNumber"
                          />
                   </div>
                   <div className = "aadharNumber">
                       <label htmlFor = "aadharNumber">Aadhar Number</label>
                       <input 
                          className = ""
                          placeholder = "Aadhar Number"
                          type = "text"
                          name = "aadharNumber"
                          />
                   </div>
                   <div className = "createAccount">
                       <button type = "submit">Login</button>
                   </div>
                </form>
            </div>
        </div>
    )
}

export default Signup