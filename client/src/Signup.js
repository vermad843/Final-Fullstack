import React,{useState} from 'react';
import './Signup.css';

function Signup() {
    const [name, setName] = useState({
        firstName : '',
        lastName : '',
        mobileNumber : '',
        address : '',
        aadharNumber : ''
    });
  
    const handleChange = (e) => {
        setName({
            ...name,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const users = {
            firstName : name.firstName,
            lastName : name.lastName,
            mobileNumber : name.mobileNumber,
            address : name.address,
            aadharNumber : name.aadharNumber
        };
        console.log(users);
    }

    return (
        <div className = "wrapper">
            <div className = "form-wrapper">
                <h1>Create Account</h1>
                <form onSubmit = {handleSubmit}>
                   <div className = "firstName">
                       <label htmlFor = "firstName">First Name</label>
                       <input 
                          type = "text"
                          className = ""
                          placeholder = "First Name"
                          name = "firstName"
                          onChange = {handleChange}
                          />
                   </div>
                   <div className = "lastName">
                       <label htmlFor = "lastName">Last Name</label>
                       <input 
                          type = "text"
                          className = ""
                          placeholder = "Last Name"
                          name = "lastName"
                          onChange = {handleChange}
                          />
                   </div><div className = "mobileNumber">
                       <label htmlFor = "mobileNumber">Mobile</label>
                       <input 
                          type = "number"
                          className = ""
                          placeholder = "Mobile Number"
                          name = "mobileNumber"
                          onChange = {handleChange}
                          />
                   </div>
                   <div className = "address">
                       <label htmlFor = "Address">Address</label>
                       <input 
                          type = "text"
                          className = ""
                          placeholder = "Address"
                          name = "address"
                          onChange = {handleChange}
                          />
                   </div>
                   <div className = "aadharNumber">
                       <label htmlFor = "aadharNumber">Aadhar Number</label>
                       <input 
                          className = ""
                          placeholder = "Aadhar Number"
                          type = "text"
                          name = "aadharNumber"
                          onChange = {handleChange}
                          />
                   </div>
                   <div className = "createAccount">
                       <button type = "submit">Create Account</button>
                       <small>Already Have An Account?</small>
                   </div>
                </form>
            </div>
        </div>
    )
}

export default Signup