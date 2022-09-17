import React from 'react'
import '../../Assets/Css/login.css'
import logo from '../../Assets/Images/logo.png'
import Googlelogo from '../../Assets/Images/googleicon.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function Login() {
    const navigate = useNavigate();
    return (
        <>
        <section className="d-flex justify-content-center align-items-center w-100 " style={{height:"100vh"}}> 



            <form className='loginform-wrapper p-3'>

                <div className='d-flex justify-content-center pb-2'>
                    <img src={logo} alt="No-Img" />
                </div>

                <p className='text-center py-2'>Welcome Back</p>

                 <h4 className='text-center py-2'>Login Into Your Account</h4>   

                <div className="form-outline mb-4">
                    <label className="form-label" for="form2Example1">Email </label>
                    <input type="email" id="form2Example1" className="form-control" />
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label" for="form2Example2">Password</label>
                    <input type="password" id="form2Example2" className="form-control" />
                </div>

                <div className="row mb-4">
                    <div className="col d-flex justify-content-center">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                            <label className="form-check-label" for="form2Example31"> Remember me </label>
                        </div>
                    </div>

                    <div className="col">
                        <a href="#!" className="text-decoration-none">Forgot password?</a>
                    </div>
                </div>

                <button type="button" onClick={()=>navigate('/home')} className="btn text-white  w-100 py-2 mb-4" style={{backgroundColor:"rgba(4, 195, 92, 1)"}}>Login Now</button>
                <button type="button" className="btn text-white d-flex py-2 align-items-center justify-content-center google-button  w-100 mb-4" style={{backgroundColor:"rgba(45, 55, 72, 1)"}}>
                <img src={Googlelogo} alt="" />
                Or sign-in with google</button>

                <div className="text-center">
                    <p>Dont have an account? 
                    <Link to={'#'}>
                    Join free today
                    </Link></p>
          
                </div>
            </form>
        </section>
        </>
    )
}

export default Login