import React,{useState} from 'react'
import '../../../Assets/Css/signup.css'
import logo from '../../../Assets/Images/logo.png'
import Googlelogo from '../../../Assets/Images/googleicon.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Signup3(props) {
    const navigate = useNavigate();

    return (
        <>
            <section className="d-flex justify-content-center align-items-center w-100 " style={{ height: "100vh" }}>

                <form className='signupForm-wrapper p-3'>

                    <div className='d-flex justify-content-center pb-2'>
                        <img src={logo} alt="No-Img" />
                    </div>

                    <p className='text-center py-2'>Step 3 of 3</p>

                    <h4 className='text-center py-2'>Create Your Account</h4>

                    <div className="form-outline mb-4">
                        <label className="form-label" for="form2Example1">Create Username  <span style={{color:"Red"}}> &nbsp;*</span></label>
                        <input type="text" id="form2Example1" className="form-control" />
                    </div>                    
                    
                    <div className="form-outline mb-4">
                        <label className="form-label" for="form2Example1">Set Password </label>
                        <input type="password" id="form2Example1" className="form-control" />
                    </div>                    
                    
                    <div className="form-outline mb-4">
                        <label className="form-label" for="form2Example1">Confirm Password <span style={{color:"Red"}}> &nbsp;*</span></label>
                        <input type="password" id="form2Example1" className="form-control" />
                    </div>



                    <button type="button" onClick={() => navigate('#')} className="btn text-white  w-100 py-2 mb-4" style={{ backgroundColor: "rgba(4, 195, 92, 1)" }}>Create Account</button>
                 
                    <div className="text-center">
                        <p> have an account? &nbsp;
                            <Link to={'#'}>
                                Sign in
                            </Link></p>

                    </div>
                </form>
            </section>
        </>
    )
}

export default Signup3