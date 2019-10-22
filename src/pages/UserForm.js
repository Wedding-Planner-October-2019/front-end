import React, { useState } from "react";

import { NavLink } from 'react-router-dom';
 
import axios from 'axios';

import '../scss/UserForm.scss';

const initialFormState = {
     wedding_name: '',
     venue: '',
     description: '',
     guest_num: '',
     user_id: '',
}
function UserForm (props) {

    const [form, setForm] =  useState(initialFormState);


    const handleChange = (event) => {
        setForm({ 
            ...form, 
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        /*axios.post('https://wedding-planner-buildweek.herokuapp.com/api/auth/user/register', form)
            .then(res =>{
                localStorage.setItem('token', res.data.payload);
                props.history.push('/Login');
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