import React from 'react'

function EditProfile() {
    return (
        <>
            <section className='editProfile-wrapper ps-3 py-3'>
                <h4>Edit Profile</h4>
                <h5>Update your profile. Click on save once done.</h5>
                <div className='col-8 py-4'>
                    <div className="form-outline mb-4">
                        <label className="form-label" for="form2Example1">Profile Picture  <span style={{ color: "Red" }}> &nbsp;*</span></label>
                        <input type="file"  name="name"  id="form2Example1" className="form-control" />
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" for="form2Example1">Name</label>
                        <input type="email" id="form2Example1"  name="email" className="form-control" />
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" for="form2Example1">Email </label>
                        <input type="email" id="form2Example1"  name="email" className="form-control" />
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" for="form2Example1">Phone <span style={{ color: "Red" }}> &nbsp;*</span></label>
                        <input type="tel" id="form2Example1"  name="phone" className="form-control" />
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" for="form2Example1">Age<span style={{ color: "Red" }}> &nbsp;*</span></label>
                        <input type="number" id="form2Example1"  name="phone" className="form-control" />
                    </div>

                </div>
            </section>
        </>
    )
}

export default EditProfile