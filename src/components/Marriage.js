import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import {getPost} from '../state/actions';

const Posts = ({ wedding_name, venue, description, guest_num, getPost }) => {
    useEffect(() => {
        // run action creator when component mounts
        getPost();
    }, [getPost])

    return (
        <div className="user-cont">
          <div className="user">
           <h2>{wedding_name}</h2>
          <h3>Wedding Location: <em>{venue}</em></h3>
          <h4>Wedding Theme: <em>{description}</em></h4>
          <h5>Number of Guests: <em>{guest_num}</em></h5>
           </div>
        </div>
      );
      }
    
    
    
    const mapStateToProps = (state) => {
      return {
        post: state.post
      }
    }
    
    export default connect(mapStateToProps, {getPost})(Posts);
    
