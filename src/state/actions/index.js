import * as types from '../types';
import axiosWithAuth from '../../utils/axiosWithAuth';
import axios from 'axios';

//actions

export const register = (credentials) => dispatch => {
    console.log(credentials);
    dispatch({ type: types.REGISTER_START });
    return axiosWithAuth()
    .post (`auth/user/register`, credentials)
        .then((res) => {
            console.log(res);
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('id', res.data.id);
            dispatch({ type: types.REGISTER_SUCCESS, payload: res.data.token, id: res.data.id });
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: types.REGISTER_FAIL, payload: err });
        })
}

export const login = (credentials) => dispatch => {
    dispatch({ type: types.LOGIN_START});
    return axiosWithAuth()
    .post (`auth/user/login`, credentials )
        .then((res) => {
            console.log(res);
            localStorage.setItem('token', res.data.token);
            dispatch({ type: types.LOGIN_SUCCESS, payload: res.data.token, id: res.data.id });
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: types.LOGIN_FAIL,  payload: err });
        })
}

export const updateData = (id, userpost) => dispatch => {
    console.log(userpost);
    dispatch({type: types.USERPOST_START});
    return axiosWithAuth()
    .put  (`auth/weddings/${id}`, userpost, {headers: {Authorization:localStorage.getItem('token')}})
    .then((res) => {
        console.log(res);
        dispatch({type: types.UPDATE_SUCCESS, payload: res.data});
    })
    .catch(err => {
        console.log(err);
        dispatch({type: types.UPDATE_FAIL, payload: err});

    })
}
export const updatePassword = (password) => dispatch => {
    dispatch({ type: types.UPDATE_PASSWORD })
    return axiosWithAuth()
    .put(`auth/user/`, password, {headers: {Authorization:localStorage.getItem('token')}})
        .then((res) => {
            console.log(res);
            dispatch({ type: types.UPDATE_PASSWORD_SUCCESS, payload: res.data });
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: types.UPDATE_PASSWORD_FAIL, payload: err});
        })
}

export const deleteAccount = (id) => dispatch => {
    dispatch({ type: types.DELETE_ACCOUNT })
    axiosWithAuth()
    .delete(`auth/weddings/${id}`, {headers: {Authorization:localStorage.getItem('token')}})
        .then((res) => {
            console.log(res);
            dispatch({ type: types.DELETE_ACCOUNT_SUCCESS, payload: id});
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: types.DELETE_ACCOUNT_FAIL, payload: err });
        })
}

export const logout = (credentials) => dispatch => {
    dispatch({ type: types.LOGOUT });
    return axiosWithAuth()
    .put(`auth/logout`, credentials)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
}

export const getPosts = () => dispatch => {
    dispatch({type: types.GET_POSTS})
    return axiosWithAuth()
    .get('auth/weddings/')
      .then(response => { 
           
        console.log("insideaxioscall",response.data);
        dispatch({type: types.GET_POSTS_SUCCESS, payload: response.data})
      })
      .catch(err => {
        console.log(err);
      });

}

export const getPost = (id) => dispatch => {
    dispatch({type: types.GET_POST})
  
    return axiosWithAuth()
    .get('auth/weddings/')
    .then(response => {
        console.log( response.data.filter(post => {
            console.log(post.id == id);
            return post.id == id
        }));
        console.log(id);
        console.log(response);
        dispatch({type: types.GET_POST_SUCCESS,
             payload: response.data.filter(post => {
                 return post.id == id
             })[0]
            })
      })
      .catch(err => {
        console.log(err.response);
      });
    }
