import React, { useState } from "react";

import { NavLink } from 'react-router-dom';
 


import '../scss/UserForm.scss';

function UserForm (props) {

    const [form, setForm] = useState
({
        user:{
        wedding_name: '',
         venue: '',
        description: '',
        wedding_date: '',
        wedding_location: '',
        wedding_photographer: '',
        user_id: '',
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
                <h1>Register for your dream wedding</h1>
                <hr />
                <form onSubmit = { (event) => handleSubmit(event)}>
                    <input
                        onChange = { (event) => handleChange(event)}
                        placeholder="Couple Name"
                        name="wedding_name"
                        value={form.wedding_name}
                        className="input"
                        required
                    >
                    </input>
                    <hr />
                    
                    <input
                        onChange = { (event) => handleChange(event)}
                        placeholder="Wedding Location"
                        name="venue"
                        value={form.venue}
                        className="input"
                        required
                    >
                    </input>
                    <hr />
                    
                   
                    <input
                        onChange = { (event) => handleChange(event)}
                        placeholder="Wedding Theme"
                        name="description"
                        value={form.description}
                        className="input"
                        required
                    >
                    </input>
                    
                    <hr />
                   
                    <input
                       onChange = { (event) => handleChange(event)}
                        placeholder="Guest Number"
                        name="guest_num"
                        value={form.guest_num}
                        className="input"
                        required
                    >
                    </input>
                    <hr />
                    <input
                        onChange = { (event) => handleChange(event)}
                        placeholder="User id"
                        name="user_id"
                        value={form.user_id}
                        className="input"
                        required
                    >
                    </input>
                    
                    <hr />
                    <button >Submit</button>
                </form>
            </div>
            </div>
           
        )
    }





export default (UserForm);