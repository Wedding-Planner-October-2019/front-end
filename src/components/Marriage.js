import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import {getPosts} from '../state/actions';
import Post from './post';

const Posts = ({posts , getPosts }) => {
 /* console.log ("marriage") */
    useEffect(() => {
        // run action creator when component mounts
        getPosts();
    }, [])
   //  console.log (posts)
     if (posts && posts.length !== 0){
        return (
            
            <div className="user-cont">
               { posts.map( item =>{
                  // console.log (item)
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
        posts: state.plans.posts
      }
    }
    
    export default connect(mapStateToProps, {getPosts})(Posts);
    
