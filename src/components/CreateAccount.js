import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../state/actions';
import axios from 'axios';
import '../scss/UserForm.scss';

const initialFormState = {
           username: '',
            password: '',
            name: '',
            phone: '',
            email: '',
            location: '',
}
function CreateAccount (props) {

    const [form, setForm] =  useState(initialFormState);
        

    const handleChange = (event) => {
        setForm({ 
            ...form, 
            [event.target.name]: event.target.value
        });
    }

   const handleSubmit = e => {
        e.preventDefault();
        axios.post('https://wedding-planner-buildweek.herokuapp.com/api/auth/user/register', form)
            .then(res =>{
                localStorage.setItem('token', res.data.payload);
                props.history.push('/Login');
            }).catch(error => console.log(error));
    }; 


        return (
            
                <div className="user-cont">
            <div className="user">
                <h1>Wedding Planner Registeration</h1>
                <hr />
                <form onSubmit = { (event) => handleSubmit(event)}>
                    <input
                        onChange = { (event) => handleChange(event)}
                        placeholder="User Name"
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
                    
                   
                    <input
                        onChange = { (event) => handleChange(event)}
                        placeholder="Name"
                        name="name"
                        value={form.name}
                        className="input"
                        required
                    >
                    </input>
                    
                    <hr />
                   
                    <input
                       onChange = { (event) => handleChange(event)}
                        placeholder="Phone"
                        name="phone"
                        value={form.phone}
                        className="input"
                        required
                    >
                    </input>
                    <hr />
                    <input
                        onChange = { (event) => handleChange(event)}
                        placeholder="Email"
                        name="email"
                        value={form.email}
                        className="input"
                        required
                    >
                    </input>
                    <hr />
                    <input
                        onChange = { (event) => handleChange(event)}
                        placeholder="Location"
                        name="location"
                        value={form.location}
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
    
    
    export default connect(mapStateToProps, { register })(CreateAccount);