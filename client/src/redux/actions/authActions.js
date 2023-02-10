/* eslint-disable no-unused-vars */
import axios from "axios"
import { SET_ERRORS, SET_PROFILE, SET_USER } from "../types"
// import setAuthToken from "../../utils/setAuthToken"
import jwt_decode from "jwt-decode"
import { SetAuth } from "../../utils/SetAuth"


export const registerUser = (userData, navigate) => dispatch => {
    axios.post("/api/register", userData)
    .then(res => {
        console.log(res.data)
        navigate("/login")
        dispatch({
            type: SET_ERRORS,
            payload: {}

        })
    })
    .catch(err => dispatch({
        type: SET_ERRORS,
        payload: err.response.data
    }))
}

export const loginUser = (userData) => dispatch => {
    axios.post("/api/login", userData)
    .then(res => {
        const {token} = res.data

        localStorage.setItem("jwtToken", token);
        const decode = jwt_decode(token)
        console.log(decode)
        dispatch(setUser(decode))
        SetAuth(window.localStorage.jwtToken)

        // setUser()
       
    }
    )
    .catch(err => dispatch({
        type: SET_ERRORS,
        payload: err.response.data
    }))
}


export const setUser = (decode)=>({
    type: SET_USER,
    payload: decode
})

export const LogOut = ()=>dispatch=>{
    localStorage.removeItem("jwtToken")
    dispatch( {
        type: SET_USER,
        payload: {}
    })
    dispatch({
        type: SET_PROFILE,
        payload:[]
    })
    
}