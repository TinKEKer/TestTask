import {LOGIN, LOGOUT} from "../types";


export const LogIn = (data)=>{
    return{
        type:LOGIN,
        payload:data
    }
}

export const LogOut = ()=>{
    return{
        type:LOGOUT
    }
}
