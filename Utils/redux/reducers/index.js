import {LOGIN, LOGOUT} from "../types";


const initialState = {
    isLoggedIn:false,
    profile:{}
}

export const reducer = (state=initialState,action)=>{
    switch (action.type){

        case LOGIN:{
            return {
                ...state,
                isLoggedIn:true,
                profile:action.payload
            }
        }

        case LOGOUT:{
            return {
                ...state,
                isLoggedIn:false,
                profile: {}
            }
        }

        default:return state
    }
}
