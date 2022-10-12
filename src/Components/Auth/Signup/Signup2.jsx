import React,{useState} from 'react'
import '../../../Assets/Css/signup.css'
import logo from '../../../Assets/Images/logo.png'
import Googlelogo from '../../../Assets/Images/googleicon.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {  IconButton } from '@mui/material'

function Signup2(props) {
    const navigate = useNavigate();

    return (
        <>

                <form className='signupForm-wrapper p-3'>
                <IconButton onClick={props.handlepage} ><ArrowBackIcon/></IconButton>   
                    <div className='d-flex justify-content-center pb-2'>
                        <img src={logo} alt="No-Img" />
                    </div>

                    <p className='text-center py-2'>Step 2 of 3</p>

                    <h4 className='text-center py-2'>Create Your Account</h4>

                    <div className="form-outline mb-4">
                    <label className="form-label" for="form2Example1">Designation <span style={{ color: "Red" }}> &nbsp;*</span></label>
                    <select class="form-select form-select-md mb-3" value={props.data?.designation} name="designation" onChange={props.fieldChange} aria-label=".form-select-lg example">
                            <option >None</option>
                            <option value="1">Farmer</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                    </select>
                    </div>


                    <div className="form-outline mb-4">
                        <label className="form-label"  for="form2Example1">Age <span style={{ color: "Red" }}> &nbsp;*</span></label>
                        <input type="number" id="form2Example1" value={props.data?.age} name="age" onChange={props.fieldChange} className="form-control" />
                    </div>                    
                    
                    <div className="form-outline mb-4">
                        <label className="form-label" for="form2Example1">Address <span style={{ color: "Red" }}> &nbsp;*</span> </label>
                        <textarea class="form-control" name="address" value={props.data?.address} onChange={props.fieldChange} id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>


                    <button type="button" onClick={() =>props.setpage(3)} className="btn text-white  w-100 py-2 mb-4" style={{ backgroundColor: "rgba(4, 195, 92, 1)" }}>Next</button>
                 
                    <div className="text-center">
                        <p> have an account? &nbsp;
                            <Link to={'/'}>
                                Sign in
                            </Link></p>

                    </div>
                </form>
        </>
    )
}

export default Signup2