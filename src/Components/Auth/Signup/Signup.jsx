import React,{useState} from 'react'
import '../../../Assets/Css/signup.css'
import logo from '../../../Assets/Images/logo.png'
import Googlelogo from '../../../Assets/Images/googleicon.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Signup2 from './Signup2'
import Signup3 from './Signup3'

function Signup() {
    const navigate = useNavigate();
    const [page, setpage] = useState(1)
    return (
        <>
        <section className="d-flex justify-content-center align-items-center w-100 " style={{ height: "100vh" }}>
              {
                page==1 ?(
                   

                <form className='signupForm-wrapper p-3'>

                    <div className='d-flex justify-content-center pb-2'>
                        <img src={logo} alt="No-Img" />
                    </div>

                    <p className='text-center py-2'>Step 1 of 3</p>

                    <h4 className='text-center py-2'>Create Your Account</h4>

                    <div className="form-outline mb-4">
                        <label className="form-label" for="form2Example1">Name  <span style={{color:"Red"}}> &nbsp;*</span></label>
                        <input type="text" id="form2Example1" className="form-control" />
                    </div>                    
                    
                    <div className="form-outline mb-4">
                        <label className="form-label" for="form2Example1">Email </label>
                        <input type="email" id="form2Example1" className="form-control" />
                    </div>                    
                    
                    <div className="form-outline mb-4">
                        <label className="form-label" for="form2Example1">Phone <span style={{color:"Red"}}> &nbsp;*</span></label>
                        <input type="tel" id="form2Example1" className="form-control" />
                    </div>

                    <div className="form-outline mb-4">
                    <label className="form-label" for="form2Example1">Organisation</label>
                    <select class="form-select form-select-md mb-3" aria-label=".form-select-lg example">
                            <option >Organisation</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                    </select>
                    </div>


                    <button type="button" onClick={() => setpage(2)} className="btn text-white  w-100 py-2 mb-4" style={{ backgroundColor: "rgba(4, 195, 92, 1)" }}>Next</button>
                 
                    <div className="text-center">
                        <p> have an account? &nbsp;
                            <Link to={'/login'}>
                                Sign in
                            </Link></p>

                    </div>
                </form>
             
            ):(
                page ==2 ?(
                    <Signup2 setpage={setpage}/>
                ):(
                    <Signup3 setpage={setpage}/>
                )
            )
        }  
            </section>
        </>
    )
}

export default Signup