import React, { useState } from 'react'
import '../../../Assets/Css/signup.css'
import logo from '../../../Assets/Images/logo.png'
import Googlelogo from '../../../Assets/Images/googleicon.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Signup2 from './Signup2'
import Signup3 from './Signup3'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import toast, { Toaster } from 'react-hot-toast';
import { PostUser } from '../../Api/Api'
import { useTranslation } from 'react-i18next';

function Signup() {
    const navigate = useNavigate();
    const [page, setpage] = useState(1)
    const { t } = useTranslation(["main"]);
    const [passError, setpassError] = useState(false)
    const [passLength, setpassLength] = useState(false)
    const [spinn, setspinn] = useState(false);

    const [SignupData, setSignupData] = useState({
        name: "",
        email: "",
        phone: "",
        organisation: "",
        designation: "",
        age: "",
        address: "",
        username: "",
        password: "",
        cpassword: ""

    })

    //input handling
    const handleInput = (e) => {
        const { name, value } = e.target;
        setSignupData({ ...SignupData, [name]: value });
    }

    // form submission
    const handleSubmit = async() => {
        const {password,cpassword,name,username,email}=SignupData
        setspinn(true)
        if(!password || !cpassword || !name || !username || !email){
            toast.error('Fill All the Required Details !')
            return;
        }
        // length of password

        if (password.length < 8) {
            setpassLength(true);
            return ;
        }else{
            setpassLength(false);
        }
        
        // confirm pass match
        
        if (password != cpassword) {
            setpassError(true);
            return ;
        }else{
            setpassError(false);
        }
        
        
        try {
            const data = await PostUser(SignupData);
            // console.log(data)
            console.log(data)
            toast.success("Account Created Successfully!")
            setspinn(false)
            navigate('/login')
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
            setspinn(false)
        }
    }

    // pageing

    const handlepage =  ()=>{
        if(page==2)setpage(1);
        else if(page==3)setpage(2);
    }

    return (
        <>
            <section className="d-flex justify-content-center align-items-center w-100 " style={{ height: "100vh" }}>
               <Toaster
                  position="top-right"
               />
                {
                    page == 1 ? (


                        <form className='signupForm-wrapper p-3' style={{minWidth:350}}>
                             
                            <div className='d-flex justify-content-center pb-2'>
                                <img src={logo} alt="No-Img" />
                            </div>

                            <p className='text-center py-2'>{t("Step")} 1 of 3</p>

                            <h4 className='text-center py-2'>{t("Create your account")}</h4>

                            <div className="form-outline mb-4">
                                <label className="form-label" for="form2Example1">{t("Name")} <span style={{ color: "Red" }}> &nbsp;*</span></label>
                                <input type="text" value={SignupData.name} name="name"  placeholder={t("Name")} onChange={handleInput} id="form2Example1" className="form-control" />
                            </div>

                            <div className="form-outline mb-4">
                                <label className="form-label" for="form2Example1">{t("Email")} <span style={{ color: "Red" }}> &nbsp;*</span></label>
                                <input type="email" id="form2Example1" value={SignupData.email} placeholder={t("Email")} name="email" onChange={handleInput} className="form-control" />
                            </div>

                            <div className="form-outline mb-4">
                                <label className="form-label" for="form2Example1">{t("Phone")} <span style={{ color: "Red" }}> &nbsp;*</span></label>
                                <input type="tel" id="form2Example1" value={SignupData.phone} placeholder={t("Phone")} onChange={handleInput} name="phone" className="form-control" />
                            </div>

                            <div className="form-outline mb-4">
                                <label className="form-label"  for="form2Example1">{t("Organisation")} <span style={{ color: "Red" }}> &nbsp;*</span></label>
                                <select class="form-select form-select-md mb-3" name="organisation" placeholder={t("Organisation")} onChange={handleInput} aria-label=".form-select-lg example">
                                    <option >{t("Organisation")}</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>


                            <button type="button" onClick={() => setpage(2)} disabled={(!SignupData?.name || !SignupData.email || !SignupData.organisation || !SignupData.phone)?(true):(false) } className="btn text-white  w-100 py-2 mb-4" style={{ backgroundColor: "rgba(4, 195, 92, 1)" }}>Next</button>

                            <div className="text-center">
                                <p> {t("Have an account?")} &nbsp;
                                    <Link to={'/login'}>
                                        {t("Signin")}
                                    </Link></p>

                            </div>
                        </form>

                    ) : (
                        page == 2 ? (
                            <Signup2 setpage={setpage} fieldChange={handleInput} data={SignupData} handlepage={handlepage}/>
                        ) : (
                            <Signup3 setpage={setpage} passLength={passLength} passError={passError} spinn={spinn} data={SignupData} handlepage={handlepage} fieldChange={handleInput} submit={handleSubmit} />
                        )
                    )
                }
            </section>
        </>
    )
}

export default Signup