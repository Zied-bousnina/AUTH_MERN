import classNames from 'classnames'
import React from 'react'

function TextArea({label, type, name, OnChangeHandler, errors, value, placeholder}) {
  return (
    <div className=" mb-3">
    <label  className="form-label">Address</label>
    <div className="input-group">
      <textarea type="text" className="form-control" placeholder={placeholder} name="address" value={value} class={classNames("form-control",{"is-invalid": errors} )} onChange={OnChangeHandler}></textarea>
      {errors &&
                   <div className='invalid-feedback'>
                        {errors}
                   </div>
                }
    </div>
  </div>
  )
}

export default TextArea