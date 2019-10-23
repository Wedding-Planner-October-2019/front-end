import React, { useState } from "react";
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { updateData } from '../state/actions';

import axios from '../utils/axiosWithAuth.js'

import '../scss/UserForm.scss';
import axiosWithAuth from "../utils/axiosWithAuth.js";

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
        axiosWithAuth().post('/auth/weddings/user', form)
             .then(res =>{
               
                props.history.push('/Marriage');
            }).catch(error => console.log(error.response)); 
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
                   
                    <button >Submit</button>
                </form>
            </div>
            </div>
           
        )
    }


    const mapStateToProps = (state) => {
        return {
            ...state,
        }
    }

    export default connect(mapStateToProps, { updateData })(UserForm);