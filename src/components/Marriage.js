import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import {getPosts} from '../state/actions';
import Post from './post';

const Posts = ({posts , getPosts }) => {

    useEffect(() => {
        // run action creator when component mounts
        getPosts();
    }, [posts])
     console.log (posts)
     if (posts !== undefined){
        return (
            
            <div className="user-cont"></div>
               { posts.map( item =>{
                   return  ( <Post item = {item}/>)
               })} 

               </div>  
          );
          
    }

     else {
         return (
             <h2>loading
             </h2>)
     }
    
 }
    
     const mapStateToProps = (state) => {
      return {
        posts: state.posts
      }
    }
    
    export default connect(mapStateToProps, {getPosts})(Posts);
    
