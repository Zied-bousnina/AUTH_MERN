import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { LogOut } from '../redux/actions/authActions'

function NavBar({user}) {
  const dispatch = useDispatch()
  const auth =useSelector(state=>state.auth)
  console.log(auth)

  const LogOutHandler=()=>{
    // localStorage.removeItem("jwtToken")
    console.log("logout")
    dispatch(LogOut())

  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">MERN Profile</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {(user.role ==="ADMIN" && user.isConnected) &&<li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/admin">ADMIN</Link>
          </li>}
        </ul>
        <div className="d-flex">
          <div className="mx-4">
            {user.isConnected? 

              <>
              <span className="text-black-50">{auth.user.name} </span>
              <Link className="btn btn-outline-primary" to='#' onClick={LogOutHandler}>Logout</Link></>
               :
             <>
                <Link className="btn btn-outline-primary" to="/register">Register</Link>
                  <Link className="btn btn-outline-primary" to="/login">Login</Link></>
              }
          </div>
        </div>
      </div>
    </div>
  </nav>
   
  )
}

export default NavBar