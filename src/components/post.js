import React from 'react';
import { connect } from 'react-redux';
import {deleteAccount} from '../state/actions';

const Post =  ({ deleteAccount, item:{id, wedding_name, venue, description, guest_num} }) => {
    return (
        <div className="user-cont post">
          <div className="user">
           <h2>{wedding_name}</h2>
          <h3>Wedding Location: <em>{venue}</em></h3>
          <h4>Wedding Theme: <em>{description}</em></h4>
          <h5>Number of Guests: <em>{guest_num}</em></h5>
           </div>
           <button onClick={() => deleteAccount(id)}>Delete</button>
        </div>
      );
      }
    
      const mapStateToProps = (state) => {
        return {
          posts: state.plans.posts
        }
      }
      
      export default connect(mapStateToProps, {deleteAccount})(Post);
