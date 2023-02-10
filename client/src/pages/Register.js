/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Inputs from '../components/Inputs'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../redux/actions/authActions'

function Register() {
  const navigate = useNavigate()

  const [Form, setForm] = useState({})
const dispatch  = useDispatch()
const errors = useSelector(state=>state.errors)
  const onChangeHandler = (e)=>{
    setForm({...Form, [e.target.name]: e.target.value})

  }
  const onSubmitHandler = (e)=>{
    e.preventDefault()
    // console.log(Form)
    dispatch(registerUser(Form, navigate))

  }


  return (

    <div className="container p-4 mt-4">
         <div className="row justify-content-evenly mt-4">
            
            <div className="col-lg-6 col-md-12 mt-4">
                <div className="d-flex">
                    <i className="fa-solid fa-right-to-bracket fs-1 mx-2"></i> <h2>Register</h2>
                </div>
                <div className="p-6 shadow-lg p-3 mb-5 bg-body rounded" style={{backgroundColor: "white"}}>
                    <form 
                    onSubmit={onSubmitHandler}
                    
                     >
                          <Inputs name={"name"} type={"text"} label={"Name"} icon={"fa-solid fa-user"} errors={errors.name} OnChangeHandler={onChangeHandler} />
                          <Inputs name={"email"} type={"email"} label={"Email address"} icon={"fa-solid fa-at"} errors={errors.email} OnChangeHandler={onChangeHandler} />
                         
                          <Inputs name={"password"} type={"password"} label={"Password"} icon={"fa-solid fa-key"} errors={errors.password} OnChangeHandler={onChangeHandler} />
                          <Inputs name={"confirm"} type={"password"} label={"Confirm Password"} icon={"fa-solid fa-key"} errors={errors.confirm} OnChangeHandler={onChangeHandler} />
                        <div className="d-flex justify-content-between">
                            <button type="submit" className="btn btn-outline-primary">Save <i className="fa-solid fa-floppy-disk"></i></button>
                            <Link to="/login">I have account</Link>
                        </div>
                      </form>
             </div>
            </div>
        </div>
    </div>
   

  )
}

export default Register