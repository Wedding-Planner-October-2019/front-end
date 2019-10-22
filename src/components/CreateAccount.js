import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../state/actions';
import axios from 'axios';
import '../scss/UserForm.scss';


function CreateAccount (props) {

    const [form, setForm] = useState({
        user: {
            username: '',
            password: '',
            name: '',
            phone: '',
            email: '',
            location: '',
        },
        appearRegister: true
    });

    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value});
    }

   const handleSubmit = e => {
        e.preventDefault();
        axios.post('https://wedding-planner-buildweek.herokuapp.com/api/auth/user/register', form.user.user)
            .then(res =>{
                localStorage.setItem('token', res.data.payload);
                props.history.push('/login');
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
                        value={form.user.username}
                        className="input"
                        required
                    >
                    </input>
                    <hr />
                    
                    <input
                        onChange = { (event) => handleChange(event)}
                        placeholder="Password"
                        name="password"
                        value={form.user.password}
                        className="input"
                        required
                    >
                    </input>
                    <hr />
                    
                   
                    <input
                        onChange = { (event) => handleChange(event)}
                        placeholder="Name"
                        name="name"
                        value={form.user.name}
                        className="input"
                        required
                    >
                    </input>
                    
                    <hr />
                   
                    <input
                       onChange = { (event) => handleChange(event)}
                        placeholder="Phone"
                        name="phone"
                        value={form.user.phone}
                        className="input"
                        required
                    >
                    </input>
                    <hr />
                    <input
                        onChange = { (event) => handleChange(event)}
                        placeholder="Email"
                        name="email"
                        value={form.user.email}
                        className="input"
                        required
                    >
                    </input>
                    <input
                        onChange = { (event) => handleChange(event)}
                        placeholder="Location"
                        name="location"
                        value={form.user.location}
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