/* eslint-disable no-unused-vars */
import React from 'react'
import ClassName from "classnames"
import classNames from 'classnames'
function Inputs({ name, label, type, icon, errors, OnChangeHandler, value, placeholder }) {
    return (
        <div className=" mb-3">
            <label className="form-label">{label}</label>
            <div className="input-group">
                { icon!==undefined? <span className="input-group-text" id="basic-addon1">  <i className={icon}></i></span> :""
}
                <input type={type} name={name} placeholder={placeholder} className="form-control" value={value}  onChange={OnChangeHandler} class={classNames("form-control",{"is-invalid": errors} )} />
                {errors &&
                   <div className='invalid-feedback'>
                        {errors ? errors : ""}
                   </div>
                }
            </div>

        </div>
    )
}

export default Inputs