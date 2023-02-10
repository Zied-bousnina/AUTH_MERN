/* eslint-disable import/no-anonymous-default-export */
import { SET_ERRORS } from "../types";


const initialState = {  
    isConnected: false,
    user: {}
}

export default function (state = initialState, action) {

    switch (action.type) {
        case SET_ERRORS:
            return  action.payload
           
            
            
    
        default:
            return state
    }
}
    