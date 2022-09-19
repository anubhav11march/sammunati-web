import React from 'react'
import HeadingStrip from '../Common/HeadingStrip'

function Query() {
  return (
    <>
        <section className='query-wrapper w-100 ps-3'>
            <HeadingStrip head={"Ask Query"} sub={false}/>
            <main className='py-2 col-7'>
                <h5>Please fill the following form and we will get back to you.</h5>
                <form className='py-3 '>

                    <div className="form-outlinec p-0 mb-4">
                        <label className="form-label" for="form2Example1">Name </label>
                        <input type="email" placeholder='Enter Your Name' style={{backgroundColor:"rgba(241, 244, 247, 1)"}} id="form2Example1" className="form-control" />
                    </div>
                    <div className="form-outlinec p-0 mb-4">
                        <label className="form-label" for="form2Example1">Mobile </label>
                        <input type="tel" placeholder='Enter Your Number' style={{backgroundColor:"rgba(241, 244, 247, 1)"}} id="form2Example1" className="form-control" />
                    </div>
                    <div className="form-outlinec p-0 mb-4">
                        <label className="form-label" for="form2Example1">How Can We Help You ? </label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" style={{backgroundColor:"rgba(241, 244, 247, 1)"}}></textarea>

                    </div>
                    <div className="d-flex justify-content-end">
                        <button className='btn btn-warning text-white'>Submit Form</button>
                    </div>

                </form>
            </main>
        </section>
    </>
  )
}

export default Query