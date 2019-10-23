import React, { useState, useEffect } from 'react';
import { updateData } from '../state/actions';
import '../scss/UserForm.scss';
import { connect } from 'react-redux';

const initialFormValues = {
    wedding_name: '',
    venue: '',
    description: '',
    guest_num: '',
    user_id: '',
}

const UpdatePosts = props => {
    const [postForm, setPostForm] = useState(props.item);

      const handlePostInputChange = e => {
        setPostForm({ ...postForm, [e.target.name]: e.target.value });
      };

      const handleSubmit = e => {
        e.preventDefault();
        props.updateData(props.id , postForm)
       } 

    return (
        <div className="user-cont">
<div className="user">
    <h1>Edit your dream wedding</h1>
    <hr />
    <form onSubmit = { (event) => handleSubmit(event)}>
        <input
            onChange={handlePostInputChange}
            placeholder="Couple Name"
            name="wedding_name"
            value={postForm.wedding_name}
            className="input"
            required
        >
        </input>
        <hr />
        
        <input
            onChange = { (event) => handlePostInputChange(event)}
            placeholder="Wedding Location"
            name="venue"
            value={postForm.venue}
            className="input"
            required
        >
        </input>
        <hr />
        
       
        <input
            onChange = { (event) => handlePostInputChange(event)}
            placeholder="Wedding Theme"
            name="description"
            value={postForm.description}
            className="input"
            required
        >
        </input>
        
        <hr />
       
        <input
           onChange = { (event) => handlePostInputChange(event)}
            placeholder="Guest Number"
            name="guest_num"
            value={postForm.guest_num}
            className="input"
            required
        >
        </input>
        <hr />
       
        <button >Edit</button>
    </form>
</div>
</div>
    )

};  


const mapStateToProps = (state) => {
    return {
      posts: state.plans.posts
    }
  }
  
  export default connect(mapStateToProps, { updateData})(UpdatePosts);