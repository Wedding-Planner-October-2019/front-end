import React from 'react';

const Post =  ({ wedding_name, venue, description, guest_num }) => {
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
    
export default Post;
