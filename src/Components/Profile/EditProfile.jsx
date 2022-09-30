import React,{useState,useEffect} from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import '../../Assets/Css/profile.css'
import { GetUser, UpdateUser } from '../Api/Api';

function EditProfile() {
    const navigate = useNavigate();
    const [profileData, setprofileData] = useState();
    const [update, setupdate] = useState({
        name: "",
        email: "",
        phone: "",
        organisation: "",
        designation: "",
        age: "",
        address: "",
        username: "",
        cpassword: ""
    })

    useEffect(() => {
        const call = async()=>{
                try {
                    const data = await GetUser();
                    setprofileData(data?.data?.data)
                    setupdate(data?.data?.data)
                } catch (error) {
                    console.log(error)
                }
        }
        call()

    }, [])
    
    const handleInput = (e)=>{
        const {name,value}=e.target;
        setupdate({...update,[name]:value});
    }
    
    const handleSubmit = async()=>{
        try {
           const data= await UpdateUser(update);
            console.log(data)
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <>
            <section className='editProfile-wrapper scroller  w-100 ps-3 py-3' >
                <h4>Edit Profile</h4>
                <h5>Update your profile. Click on save once done.</h5>
                <div className='col-5 py-4'>
                    <div className="form-outline mb-4">
                        <label className="form-label" for="form2Example1">Profile Picture  <span style={{ color: "Red" }}> &nbsp;*</span></label>
                        <input type="file"   name="name"   id="form2Example1" className="form-control" />
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" for="form2Example1">Name</label>
                        <input type="text" id="form2Example1" onChange={handleInput} name="name" defaultValue={profileData?.name}  placeholder='Your Name'  className="form-control" />
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" for="form2Example1">Email </label>
                        <input type="email" id="form2Example1" onChange={handleInput} defaultValue={profileData?.email}  placeholder='Email' name="email" className="form-control" />
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" for="form2Example1">Phone </label>
                        <input type="tel" id="form2Example1" onChange={handleInput} defaultValue={profileData?.phone}  name="phone" className="form-control" />
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" for="form2Example1">Age</label>
                        <input type="number" id="form2Example1" onChange={handleInput} defaultValue={profileData?.age}  name="age" className="form-control" />
                    </div>

                    <div className="form-outline mb-4">
                    <label className="form-label" for="form2Example1">Designation</label>
                    <select class="form-select form-select-md mb-3" id="form2Example1" onChange={handleInput} defaultValue={profileData?.designation} name="designation"  aria-label=".form-select-lg example">
                            <option >{profileData?.designation}</option>
                            <option value="1">Farmer</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                    </select>
                    </div>

                    <div className="form-outline mb-4">
                                <label className="form-label"  for="form2Example1">Organisation</label>
                                <select class="form-select form-select-md mb-3" onChange={handleInput} id="form2Example1" name="organisation"  aria-label=".form-select-lg example">
                                    <option >{profileData?.organisation}</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
              
              <button className='btn btn-warning text-white' onClick={handleSubmit}>Submit</button>
              
                </div>
            </section>
        </>
    )
}

export default EditProfile
