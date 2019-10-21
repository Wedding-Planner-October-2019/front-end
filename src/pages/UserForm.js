import React, { useState } from "react";

import { NavLink } from 'react-router-dom';
 


import '../scss/UserForm.scss';

function UserForm (props) {

    const [form, setForm] = useState
({
        user:{
        couple_name: '',
        wedding_theme: '',
        item_photo: '',
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
                        name="couple_name"
                        value={form.couple_name}
                        className="input"
                        required
                    >
                    </input>
                    <hr />
                    <input
                        onChange = { (event) => handleChange(event)}
                        placeholder="Wedding Theme"
                        name="wedding_theme"
                        value={form.wedding_theme}
                        className="input"
                        required
                    >
                    </input>
                    <hr />
                    <input
                        onChange = { (event) => handleChange(event)}
                        placeholder="Wedding Image Link"
                        name="item_photo"
                        value={form.item_photo}
                        className="input"
                        required
                    >
                    </input>
                    <hr />
                    <input
                        onChange = { (event) => handleChange(event)}
                        placeholder="Wedding Date"
                        name="wedding_date"
                        value={form.wedding_date}
                        className="input"
                        required
                    >
                    </input>
                    <hr />
                    <input
                        onChange = { (event) => handleChange(event)}
                        placeholder="Wedding Location"
                        name="wedding_location"
                        value={form.wedding_location}
                        className="input"
                        required
                    >
                    </input>
                    <hr />
                    <input
                       onChange = { (event) => handleChange(event)}
                        placeholder="Wedding Photographer"
                        name="wedding_photographer"
                        value={form.wedding_photographer}
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