import React,{useState} from 'react'
import '../../../Assets/Css/signup.css'
import logo from '../../../Assets/Images/logo.png'
import Googlelogo from '../../../Assets/Images/googleicon.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {  IconButton } from '@mui/material'

function Signup3(props) {
    const navigate = useNavigate();
    
    return (
        <>
                <form className='signupForm-wrapper p-3'>
                <IconButton onClick={props.handlepage} ><ArrowBackIcon/></IconButton>   
                    <div className='d-flex justify-content-center pb-2'>
                        <img src={logo} alt="No-Img" />
                    </div>

                    <p className='text-center py-2'>Step 3 of 3</p>

                    <h4 className='text-center py-2'>Create Your Account</h4>

                    <div className="form-outline mb-4">
                        <label className="form-label"  >Create Username  <span style={{color:"Red"}}> &nbsp;*</span></label>
                        <input type="text" id="form2Example1" value={props.data?.username} name="username" onChange={props.fieldChange } className="form-control" />
                    </div>                    
                    
                    <div className="form-outline mb-4">
                        <label className="form-label"  >Set Password  <span style={{color:"Red"}}> &nbsp;*</span> </label>
                        <input type="password" value={props.data?.password} name="password" onChange={props.fieldChange } id="form2Example2" className="form-control" />
                        {
                            props?.passLength ? (
                                <p style={{color:"red"}} className="mt-2">Password must be 8 characters long</p>
                            ):(null)
                        }
                    </div>                    
                    
                    
                    <div className="form-outline mb-4">
                        <label className="form-label"  >Confirm Password <span style={{color:"Red"}}> &nbsp;*</span></label>
                        <input type="password" id="form2Example3" value={props.data?.cpassword} name="cpassword" onChange={props.fieldChange } className="form-control" />
                        {
                            props?.passError ? (
                                <p style={{color:"red"}} className="mt-2">Password didn't match</p>
                            ):(null)
                        }
                        
                    </div>



                    <button type="button" onClick={() => props.submit()} className="btn text-white  w-100 py-2 mb-4" style={{ backgroundColor: "rgba(4, 195, 92, 1)" }}>Create Account</button>
                 
                    <div className="text-center">
                        <p> have an account? &nbsp;
                            <Link to={'/login'}>
                                Sign in
                            </Link></p>

                    </div>
                </form>
        </>
    )
}

export default Signup3