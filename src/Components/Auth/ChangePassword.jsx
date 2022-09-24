import React from 'react'
import logo from '../../Assets/Images/logo.png'
import { Link } from 'react-router-dom'
function ChangePassword() {
  return (
    <>
            <section className="d-flex justify-content-center align-items-center w-100 " style={{ height: "100vh" }}>

                      <form className='signupForm-wrapper w-25 p-3'>
                    <div className='d-flex justify-content-center pb-2'>
                        <img src={logo} alt="No-Img" />
                    </div>

                    <p className='text-center py-2'>Hi User</p>


                    <div className="form-outline mb-4">
                    <label className="form-label" for="form2Example1">Enter Current Password <span style={{ color: "Red" }}> &nbsp;*</span></label>
                    <input type="password" id="form2Example1"  name="password"  className="form-control" />
                    </div>


                    <div className="form-outline mb-4">
                        <label className="form-label"  for="form2Example1">Set New Password <span style={{ color: "Red" }}> &nbsp;*</span></label>
                        <input type="password" id="form2Example1"  name="password"  className="form-control" />
                    </div>                    
                    
                    <div className="form-outline mb-4">
                        <label className="form-label" for="form2Example1">Confirm New Password <span style={{ color: "Red" }}> &nbsp;*</span> </label>
                        <input type="password" id="form2Example1"  name="cpassword"  className="form-control" />
                    </div>


                    <button type="button"  className="btn text-white  w-100 py-2 mb-4" style={{ backgroundColor: "rgba(4, 195, 92, 1)" }}>Next</button>
                 
                    <div className="text-center">
                            <Link to={'/'} className='text-decoration-none'>
                                 Cancel Password Change
                            </Link>

                    </div>
                </form>
                </section>
    </>
  )
}

export default ChangePassword