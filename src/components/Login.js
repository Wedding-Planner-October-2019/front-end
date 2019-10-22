import React, { useState } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../state/actions';
import '../scss/UserForm.scss';
import axios from 'axios';


const initialFormState = {
    username: '',
    password: '',
}

function Login(props) {

    const [form, setForm] = useState(initialFormState);

    const handleChange = (event) => {
        setForm({ 
            ...form, 
            [event.target.name]: event.target.value
        });
    }

   const handleSubmit = e =>{
        e.preventDefault();
        axios.post('https://wedding-planner-buildweek.herokuapp.com/api/auth/user/login', form) 
            .then(res => {
                localStorage.setItem('token', res.data.token);
                props.history.push('/UserForm');
            }).catch(error => console.log(error));
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
                        type = "password"
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

    const mapStateToProps = (state) => {
        return {
            ...state, 
        }
    }
    export default connect(mapStateToProps, { login })(Login);



