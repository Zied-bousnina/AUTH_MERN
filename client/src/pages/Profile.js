/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Inputs from '../components/Inputs'
import TextArea from '../components/TextArea'
import { useDispatch, useSelector } from 'react-redux'
import { AddProfile, GetProfile } from '../redux/actions/profileActions'


function Profile() {
  const [Form, setForm] = useState({})
  const dispatch = useDispatch()
 const errors = useSelector(state=>state.errors)
 const profiles = useSelector(state=>state.profiles)
 console.log(profiles.profile!=={} ? profiles.profile:profiles.profile[0].tel)
 console.log(profiles)
 


  const OnChangeHandler = (e)=>{
    setForm({
      ...Form, 
      [e.target.name]: e.target.value
    })
    
  }
  
  const onSubmitHandler = (e)=>{
    e.preventDefault()
    dispatch(AddProfile(Form))
    console.log(Form)
  }
  useEffect(() => {

    const fetchData = async () => {
      await dispatch(GetProfile());
      setForm( profiles.profile[0] );
    };
    fetchData();
    //   await dispatch(GetProfile())
    //  setForm(profiles.profile[0])
   
  }, [])
  
    return (
        
      
      <div className="container p-4 mt-4">
        <div className="row justify-content-evenly mt-4">
          {/* {profiles.profile[0]?.tel} */}
           
           <div className="col-lg-6 col-md-12 mt-4">
               <div className="d-flex">
                <i className="fa-solid fa-user fs-1 mx-2"></i> <h2>Profile</h2>
               </div>
               <div className="p-6 shadow-lg p-3 mb-5 bg-body rounded" style={{backgroundColor: "white"}}>
                   <form
                   onSubmit={onSubmitHandler}
                  //  onChange={onChangeHandler}
                   >
                      
                         <Inputs name={"tel"} type={"text"} label={"Telephone"} placeholder={profiles.profile[0]?.tel} value={ Form && Form.tel ? Form.tel : ""} OnChangeHandler={OnChangeHandler}  errors={errors.tel} />

                      
                       <Inputs name={"city"} type={"text"} label={"City"} placeholder={profiles.profile[0]?.city} value={Form && Form.city ? Form.city : ""}  OnChangeHandler={OnChangeHandler} errors={errors.city} />

                       
                         <Inputs name={"country"} type={"text"} label={"Country"} placeholder={profiles.profile[0]?.country}  value={Form && Form.country ? Form.country : ""}  OnChangeHandler={OnChangeHandler} errors={errors.country} />
                        
                          <Inputs name={"bio"} type={"text"} label={"Bio"}placeholder={profiles.profile[0]?.bio}value={Form && Form.bio ? Form.bio : ""}  OnChangeHandler={OnChangeHandler} errors={errors.bio} />
                          <Inputs name={"postalCode"} type={"text"} label={"postalCode"}placeholder={profiles.profile[0]?.postalCode}value={Form && Form.postalCode ? Form.postalCode : ""}  OnChangeHandler={OnChangeHandler} errors={errors.postalCode} />
                          
                          <TextArea name={"address"} type={"text"} label={"Address"}placeholder={profiles.profile[0]?.address} value={Form && Form.address ? Form.address : ""}  OnChangeHandler={OnChangeHandler} errors={errors.address} />
                       <div className="d-flex justify-content-between">
                           <button type="submit" className="btn btn-outline-primary">Update <i className="fa-solid fa-floppy-disk"></i></button>
                       </div>
                     </form>
            </div>
           </div>
       </div>
   </div>


  )
}

export default Profile