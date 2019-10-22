import React, { useState } from "react";

import { Link } from 'react-router-dom';


import '../scss/UserForm.scss';

function Login (props) {

    const [form, setForm] = useState
({
        user:{
        username: '',
        password: '',
       
        },
        appearRegister: true
    });

    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value});
    }

   const handleSubmit = e =>{
        e.preventDefault();
        /* axios.post('http://localhost:5000/api/login', credentials) 
        .then(res =>{
          localStorage.setItem('token', res.data.payload);
          history.push('/bubble-page');
        }).catch(error => console.log(error)); */
      }; 


        return (
            
                <div className="user-cont">
            <div className="user">
                <h1>Wedding Planner Login</h1>
                <hr />
                <form onSubmit = { (event) => handleSubmit(event)}>
                    <input
                        onChange = { (event) => handleChange(event)}
                        placeholder=" User Name"
                        name="username"
                        value={form.username}
                        className="input"
                        required
                    >
                    </input>
                    <hr />
                    
                    <input
                        onChange = { (event) => handleChange(event)}
                        placeholder="Password"
                        name="password"
                        value={form.password}
                        className="input"
                        required
                        
                    >
                    </input>
                    <hr />
                    
                   
                   
                    <hr />
                    <button >Submit</button>
                </form>
                <p>Not a Member? <Link to='/CreateAccount'>Register Here</Link></p>
            </div>
            </div>
           
        )
    }





export default (Login);