import React,{useState} from 'react'
import '../../Assets/Css/header.css'
import { useNavigate } from 'react-router-dom'
import logo from '../../Assets/Images/logo.png'
import NotificationsIcon from '@mui/icons-material/Notifications';
import person from '../../Assets/Images/men.png'
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import NotificationCard from './NotificationCard';
function Header({langChange}) {
    const [isLoggedIn, setisLoggedIn] = useState(true);
    const navigate = useNavigate()
    const handleChange=(e)=>{
        console.log(e)
    }
    
// notification
const [open, setOpen] = React.useState(false);
const [anchorEl, setAnchorEl] = React.useState(null);
const [placement, setPlacement] = React.useState();

const handleClick = (newPlacement) => (event) => {
  setAnchorEl(event.currentTarget);
  setOpen((prev) => placement !== newPlacement || !prev);
  setPlacement(newPlacement);
};

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

                            {
                                isLoggedIn ? (
                                        <div className='d-flex align-items-center afterlogin'>
                                        <NotificationsIcon  onClick={handleClick("bottom-end")}s/>
                                        <h5>Hi Saurabh</h5>
                                        <img onClick={()=>navigate('/editprofile')} src={person} alt="noimg" />
                                        </div>
                                ):(
                                     <button onClick={()=>navigate('/login')} className="btn  btn-outline-secondary mx-3">Sign In</button>       
                                )
                            }

                        </div>
                    </div>
                </nav>
            </header>
            <Popper
                      open={open}
                      placement={placement}
                      anchorEl={anchorEl}
                      transition
                      style={{ zIndex: "10000", marginTop: "15px" }}
                    >
                      {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                          <div className="popper-Box">
                            
                            <div className="d-flex flex-column py-2">
                              <NotificationCard />
                              <NotificationCard />
                            </div>
                          </div>
                        </Fade>
                      )}
                    </Popper>

        </>
    )
}

export default Header