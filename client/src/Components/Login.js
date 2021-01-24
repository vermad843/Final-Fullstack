import React,{useState,useEffect} from 'react';
import './Signup.css';

function Login() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/auth/signup')
        .then(res => res.json())
        .then(data =>setData(data));
    });
    
    return (
        <>
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
        <section>
            {
                data.map((user) => {
                    return(
                        <div key = {user._id} className = "user " >
                           <li className = "w3-card w3-yellow">
                               <h3>{user.firstname}</h3>
                               <h3>{user.lastname}</h3>
                               <h3>{user.fullAddress}</h3>
                           </li>
                           <br/>
                        </div>
                       
                    )
                })
            }
            </section>
        </>
    )
}

export default Login;