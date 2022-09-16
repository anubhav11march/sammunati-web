import React from 'react'
import '../../Assets/Css/header.css'
import logo from '../../Assets/Images/logo.png'
function Header({langChange}) {
    
    return (
        <>
            <header className='header-wrapper mb-3'>
                <nav className="header-contet  py-2">
                    <div className="container-fluid d-flex">
                        <div className='col-8 d-flex logo-container'>
                            <img src={logo} alt="logo"  />
                            <form className="d-flex w-50 ms-4" role="search">
                                <input className="form-control me-2 " type="search" placeholder="Search all videos" aria-label="Search" />
                            </form>
                        </div>

                        <div className='col-4 d-flex justify-content-end'>
                            
                            <div className="dropdown mx-3">
                                <button className="btn  btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Language
                                </button>
                                <ul className="dropdown-menu mt-2">
                                    <li className="dropdown-item" value="hindi" onClick={(e)=>{langChange(e.target.__reactProps$qsae94wcrm.value)}} >हिन्दी</li>
                                    <li><a className="dropdown-item" value="english" onChange={(e)=>{langChange(e.target.__reactProps$qsae94wcrm.value)}} href="#">English</a></li>
                                    <li><a className="dropdown-item" value="marathi" onClick={(e)=>{langChange(e.target.__reactProps$qsae94wcrm.value)}} href="#">मराठी</a></li>
                                    <li><a className="dropdown-item" value="bandi" onClick={(e)=>{langChange(e.target.__reactProps$qsae94wcrm.value)}} href="#">బండి</a></li>
                                    <li><a className="dropdown-item" value="tamil" onClick={(e)=>{langChange(e.target.__reactProps$qsae94wcrm.value)}} href="#">தமிழ்</a></li>
                                    <li><a className="dropdown-item" value="arabic" onClick={(e)=>{langChange(e.target.__reactProps$qsae94wcrm.value)}} href="#">عربى</a></li>
                                    <li><a className="dropdown-item" value="urdu" onClick={(e)=>{langChange(e.target.__reactProps$qsae94wcrm.value)}} href="#">اردو</a></li>
                                </ul>
                            </div>

                             <button className="btn  btn-outline-secondary mx-3">Sign In</button>       

                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header