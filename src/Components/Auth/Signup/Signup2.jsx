import React,{useState} from 'react'
import '../../../Assets/Css/signup.css'
import logo from '../../../Assets/Images/logo.png'
import Googlelogo from '../../../Assets/Images/googleicon.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {  IconButton } from '@mui/material'
import { useTranslation } from 'react-i18next';


function Signup2(props) {
    const navigate = useNavigate();
    const { t } = useTranslation(["main"]);


    return (
        <>

                <form className='signupForm-wrapper p-3' style={{minWidth:350}}>
                <IconButton onClick={props.handlepage} ><ArrowBackIcon/></IconButton>   
                    <div className='d-flex justify-content-center pb-2'>
                        <img src={logo} alt="No-Img" />
                    </div>

                    <p className='text-center py-2'>{t("Step")} 2 of 3</p>

                    <h4 className='text-center py-2'>{t("Create your account")}</h4>

                    <div className="form-outline mb-4">
                    <label className="form-label" for="form2Example1">{t("Designation")} <span style={{ color: "Red" }}> &nbsp;*</span></label>
                    <select class="form-select form-select-md mb-3" value={props.data?.designation} name="designation" onChange={props.fieldChange} aria-label=".form-select-lg example">
                            <option >{t("Designation")} </option>
                            <option value="1">Farmer</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                    </select>
                    </div>


                    <div className="form-outline mb-4">
                        <label className="form-label"  for="form2Example1">{t("Age")} <span style={{ color: "Red" }}> &nbsp;*</span></label>
                        <input type="number" id="form2Example1" value={props.data?.age} min={0} max={120} placeholder={t("Age")}  name="age" onChange={props.fieldChange} className="form-control" />
                    </div>                    
                    
                    <div className="form-outline mb-4">
                        <label className="form-label" for="form2Example1">{t("Address")}  <span style={{ color: "Red" }}> &nbsp;*</span> </label>
                        <textarea class="form-control" name="address" placeholder={t("Address")} value={props.data?.address} onChange={props.fieldChange} id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>


                    <button type="button" onClick={() =>props.setpage(3)} disabled={!props.data?.age || !props.data?.designation || !props.data?.address ?(true):(false) } className="btn text-white  w-100 py-2 mb-4" style={{ backgroundColor: "rgba(4, 195, 92, 1)" }}> {t("Next")} </button>
                 
                    <div className="text-center">
                        <p> {t("Have an account?")} &nbsp;
                            <Link to={'/'}>
                                {t("Signin")}
                            </Link></p>

                    </div>
                </form>
        </>
    )
}

export default Signup2