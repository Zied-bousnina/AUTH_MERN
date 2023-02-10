import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Inputs from '../components/Inputs'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../redux/actions/authActions'

function Login() {

const [Form, setForm] = useState({})
const dispatch  = useDispatch()
const errors = useSelector(state=>state.errors)

const OnChangeHandler = e=>{
  setForm({...Form, [e.target.name]: e.target.value})
  
}

const onSubmitHandler = e=>{
  e.preventDefault()
  console.log(Form)
  dispatch(loginUser(Form))
}
  return (
    <>
      <div className="container p-4 mt-4">
        <div className="row justify-content-evenly mt-4">
          <div className="col-lg-6 col-md-12 mt-4">
            <div className="d-flex">
              <i className="fa-solid fa-right-to-bracket fs-1 mx-2"></i> <h2>Login</h2>
            </div>
            <div className="p-6 shadow-lg p-3 mb-5 bg-body rounded" style={{ backgroundColor: "white" }}>
              <form 
              onSubmit={onSubmitHandler}
              onChange={OnChangeHandler}
              
              >
                <Inputs name={"email"} type={"text"} label={"Email address"} icon={"fa-solid fa-at"} errors={errors.email} OnChangeHandler={OnChangeHandler} />

                <Inputs label={"Password"} type={"password"} icon={"fa-solid fa-key"} errors={errors.password} name={"password"}OnChangeHandler={OnChangeHandler} />
                <div className="d-flex justify-content-between">
                  <button type="submit" className="btn btn-outline-primary">Save <i className="fa-solid fa-floppy-disk"></i></button>
                  <Link to="/register">I don't have account</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Login