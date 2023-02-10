import axios from "axios"
import { SET_ERRORS, SET_PROFILE } from "../types"

export const AddProfile = (form)=>dispatch=>{

    axios.post("/api/profile", form)
    .then(res=>{
        console.log(res.data)
        dispatch({
            type: SET_PROFILE,
            payload: res.data
        })

    

    }).catch(err=> {
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
    })
}


export const getAllProfiles = ()=>{
    axios.get("/api/profiles")
    .then(res=>{
        console.log(res.data)
    })
    .catch(err=> console.log(err))
}

export const GetProfile = ()=>dispatch=>{
    axios.get("/api/profile")
    .then(res=>{
        dispatch({
            type: SET_PROFILE,
            payload: res.data
        })
    })
    .catch(err=>{
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
    })
}