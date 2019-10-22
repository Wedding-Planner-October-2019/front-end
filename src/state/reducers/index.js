//actions 
import * as types from '../types';

//The source of all truth
const initialState = {
    data: [],
    posts: [],
    post: {},
    title: '',
    body: '',
    fetchingData: false,
    isLoggedIn: false,
    error: '',
    token: '',
    id: ''
}

//Reducer
export const rootReducer = (state=initialState, action) => {
    //switch statement
    switch(action.type) {
        case types.REGISTER_START:
        return {
            ...state,
            fetchingData: true,
            token: action.payload,
            id: action.id
        }
        case types.REGISTER_SUCCESS:
        return {
            ...state,
            fetchingData: false,
            isLoggedIn: true
        }
        case types.REGISTER_FAIL:
        return {
            error: action.payload
        }
        case types.LOGIN_START:
        return {
            ...state,
            fetchingData: true, 
            token: action.payload,
            id: action.id
        }
        case types.LOGIN_SUCCESS:
        return {
            ...state,
            fetchingData: false,
            isLoggedIn: true,
            token: action.payload
        }
        case types.LOGIN_FAIL:
        return {
            error: action.payload
        }
        case types.UPDATE_DATA:
        return {
            ...state, 
            fetchingData: false,
            isLoggedIn: true
        }
        case types.GET_DATA_SUCCESS: 
        return {
            ...state,
            fetchingData: false,
            data: action.payload.response,

        }
        case types.GET_DATA_FAIL: 
        return {
            error: action.payload
        }
        case types.UPDATE_PASSWORD:
        return {
            ...state, 
            fetchingData: true
        }
        case types.UPDATE_PASSWORD_SUCCESS:
        return {
            
        }
        case types.UPDATE_PASSWORD_FAIL:
        return {
            error: action.payload
        }
        case types.DELETE_ACCOUNT:
        return {
            ...state, 
            fetchingData: true, 
        }
        case types.DELETE_ACCOUNT_SUCCESS:
        return {
            ...state,
        }
        case types.DELETE_ACCOUNT_FAIL:
        return {
            ...state, 
            error: action.payload
        }
        case types.UPDATE_SUCCESS:
            return {
            }
        case types.UPDATE_FAIL:
            return{
                error: action.payload
            }
            case types.GET_POSTS:
                return {
                    ...state,
                }
            case types.GET_POSTS_SUCCESS:
                return {
                    ...state,
                    posts: action.payload
                }
            case types.GET_POST:
                return {
                    ...state,
                }
            case types.GET_POST_SUCCESS:
                return {
                    ...state,
                    post: action.payload
                }   
       


        default: return state;
    }
}