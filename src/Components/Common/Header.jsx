import React from 'react'
import '../../Assets/Css/header.css'
import { useNavigate } from 'react-router-dom'
import logo from '../../Assets/Images/logo.png'
function Header({langChange}) {
    const navigate = useNavigate()
    const handleChange=(e)=>{
        console.log(e)
    }
    
    return (
        <>
            <header className='header-wrapper mb-3'>
                <nav className="header-contet  py-2">
                    <div className="container-fluid d-flex">
                        <div className='col-8 d-flex logo-container'>
                            <img src={logo} alt="logo" onClick={()=>navigate('/')} />
                            <form className="d-flex w-50 ms-4" role="search">
                                <input className="form-control me-2 " type="search" placeholder="Search all videos" aria-label="Search" />
                            </form>
                        </div>

                        <div className='col-4 d-flex justify-content-end'>
                            
                            <div className="dropdown mx-3">
                            <select className="form-select w-100  form-select-md " onChange={(e)=>langChange(e.target.value)} aria-label=".form-select-lg example">
                                    <option >Language</option>
                                    <option value="hindi" >हिन्दी</option>
                                    <option value="english" >English</option>
                                    <option value="marathi" >मराठी</option>
                                    <option value="bandi" >బండి</option>
                                    <option value="tamil" >தமிழ்</option>
                                    <option value="arabic" >عربى</option>
                                    <option value="urdu">اردو</option>
                            </select>
                            
                            </div>

                             <button onClick={()=>navigate('/login')} className="btn  btn-outline-secondary mx-3">Sign In</button>       

                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header