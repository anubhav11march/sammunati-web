import React,{useState} from 'react'
import '../../../Assets/Css/signup.css'
import logo from '../../../Assets/Images/logo.png'
import Googlelogo from '../../../Assets/Images/googleicon.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useTranslation } from 'react-i18next';
import {  IconButton } from '@mui/material'
import { Visibility } from '@mui/icons-material'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function Signup3(props) {
    const navigate = useNavigate();
    const { t } = useTranslation(["main"]);
    const [unmask, setunmask] = useState(false)
    const [unmask2, setunmask2] = useState(false)

    
    return (
        <>
                <form className='signupForm-wrapper p-3'  style={{minWidth:350}}>
                <IconButton onClick={props.handlepage} ><ArrowBackIcon/></IconButton>   
                    <div className='d-flex justify-content-center pb-2'>
                        <img src={logo} alt="No-Img" />
                    </div>

                    <p className='text-center py-2'>{t("Step")} 3 of 3</p>

                    <h4 className='text-center py-2'>{t("Create your account")}</h4>

                    <div className="form-outline mb-4">
                        <label className="form-label"  >{t("Create username")}  <span style={{color:"Red"}}> &nbsp;*</span></label>
                        <input type="text" id="form2Example1" placeholder={t("Create username")} value={props.data?.username} name="username" onChange={props.fieldChange } className="form-control" />
                    </div>                    
                    
                    <div className="form-outline mb-4 position-relative">
                        <label className="form-label"  > {t("Password")}  <span style={{color:"Red"}}> &nbsp;*</span> </label>
                        <input type={unmask ?("text"):("password")} value={props.data?.password} placeholder={t("Password")} name="password" onChange={props.fieldChange } id="form2Example2" className="form-control" />
                   
                        {
                            unmask ?(
                                <VisibilityOffIcon className="eye-icon" onClick={()=>setunmask(false)}/>
                            ):(
                                <Visibility className="eye-icon" onClick={()=>setunmask(true)}/>
                            )
                            }
                        {
                            props?.passLength ? (
                                <p style={{color:"red"}} className="mt-2">{t("Password must be 8 characters long")}</p>
                            ):(null)
                        }
                    </div>                    
                    
                    
                    <div className="form-outline mb-4 position-relative">
                        <label className="form-label"  >{t("Confirm password")} <span style={{color:"Red"}}> &nbsp;*</span></label>
                        <input type={unmask2 ?("text"):("password")} id="form2Example3" placeholder={t("Confirm password")} value={props.data?.cpassword} name="cpassword" onChange={props.fieldChange } className="form-control" />
                        {
                            unmask2 ?(
                                <VisibilityOffIcon className="eye-icon" onClick={()=>setunmask2(false)}/>
                            ):(
                                <Visibility className="eye-icon" onClick={()=>setunmask2(true)}/>
                            )
                            }
                        {
                            props?.passLength ? (
                                <p style={{color:"red"}} className="mt-2">{t("Password must be 8 characters long")}</p>
                            ):(null)
                        }
                        {
                            props?.passError ? (
                                <p style={{color:"red"}} className="mt-2">{t("Password didn't match")}</p>
                            ):(null)
                        }
                        
                    </div>



                    <button type="button" onClick={() => props.submit()}  className="btn text-white  w-100 py-2 mb-4" style={{ backgroundColor: "rgba(4, 195, 92, 1)" }}>Create Account
                    {
            props.spinn ?(
              <div class="spinner-border mx-2 spinner-border-sm text-light" role="status">
                <span class="sr-only"></span>
              </div>
            ):(null)
          }</button>
                 
                    <div className="text-center">
                        <p> {t("Have an account?")} &nbsp;
                            <Link to={'/login'}>
                                {t("Signin")}
                            </Link></p>

                    </div>
                </form>
        </>
    )
}

export default Signup3