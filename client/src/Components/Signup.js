import React,{useState} from 'react';
import './Signup.css';
import Login from './Login';

function Signup() {
    const [loading, setLoading] = useState(false);
    const [eligible, setEligible ] = useState(false);

    const [name, setName] = useState({
        firstname : '',
        lastname : '',
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
            firstname : name.firstname,
            lastname : name.lastname,
            mobileNumber : name.mobileNumber,
            fullAddress : name.address,
            aadharCard : name.aadharNumber
        };

        setLoading({
            loading : true
        })
         
        fetch('http://localhost:5000/auth/signup', {
            method : 'POST',
            body : JSON.stringify(users),
            headers : {
                'content-type' : 'application/json'
            },
        }).then(res => {
            if(res) {
                return res.json();
            }
            return res.json().then(error => {
                throw new Error(error.message);
            });
        }).then((user) => {
            setLoading({
                loading : false
            }) ;
            setEligible({
                eligible : !eligible
              })
              console.log(user)
           
        }).catch(error => {
            console.log(error);
        });

        
    }

    return (
        <>
         {eligible ? <Login/> : 
        <div className = "wrapper">        
            { loading ?  <img src = "./loading.gif"/> :
            
           (<div className = "form-wrapper">
                <h1>Create Account</h1>
                <form onSubmit = {handleSubmit}>
                   <div className = "firstName">
                       <label htmlFor = "firstName">First Name</label>
                       <input 
                          type = "text"
                          className = ""
                          placeholder = "First Name"
                          name = "firstname"
                          onChange = {handleChange}
                          />
                   </div>
                   <div className = "lastName">
                       <label htmlFor = "lastName">Last Name</label>
                       <input 
                          type = "text"
                          className = ""
                          placeholder = "Last Name"
                          name = "lastname"
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
            </div>)}
        </div>}
        </>
    )
}

export default Signup;
