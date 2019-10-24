import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {deleteAccount} from '../state/actions';
import UpdatePosts from '../components/UpdatePosts';

const Post =  ({ deleteAccount, item:{id, wedding_name, venue, description, guest_num} }) => {

    const [willShow, setWillShow] = useState(false);

    const handleSubmit = () => {
        setWillShow(true);
    }

    useEffect(() => {
        if(willShow) {
            setWillShow(false)
        }
    }, [wedding_name, venue, description, guest_num])

    return (
        <>
        <div className="post-cont post ">
          <div className="user">
           <h2>{wedding_name}</h2>
          <h3>Wedding Location: <em>{venue}</em></h3>
          <h4>Wedding Theme: <em>{description}</em></h4>
          <h5>Number of Guests: <em>{guest_num}</em></h5>
           
           <button onClick={() => deleteAccount(id)}>Delete</button>
           <button onClick={handleSubmit}>Edit</button>
           </div>
        </div>
        {willShow && <UpdatePosts id={id} item={{id, wedding_name, venue, description, guest_num}} />}
        </>
      );
      }
    
      const mapStateToProps = (state) => {
        return {
          posts: state.plans.posts
        }
      }
      
      export default connect(mapStateToProps, {deleteAccount})(Post);
