import React,{useState} from 'react'
import { AddQuery } from '../Api/Api'
import HeadingStrip from '../Common/HeadingStrip'

function Query() {
    const [QueryForm, setQueryForm] = useState({
        name:"",
        phone:"",
        query:""
    })
    const [isSubmitted, setisSubmitted] = useState(false)
    const handleInput = (e) =>{
        const {name,value}=e.target
        setQueryForm({...QueryForm,[name]:value});
    }
    const SubmitForm = async(e)=>{
        e.preventDefault();
        try {
            await AddQuery(QueryForm);
            setisSubmitted(true)
            
        } catch (error) {
            console.log(error)
        }
    }

    return (
    <>
        <section className='query-wrapper w-100 ps-3'>
            <HeadingStrip head={"Ask Query"} sub={false}/>
            <main className='py-2 col-7'>
                {
                    isSubmitted ? (
                        <h5>Form Submitted</h5>
                    ):(
                        <>
                <h5>Please fill the following form and we will get back to you.</h5>
                <form className='py-3 ' onSubmit={SubmitForm}>
                    <div className="form-outlinec p-0 mb-4">
                        <label className="form-label" for="form2Example1">Name </label>
                        <input type="text" onChange={handleInput} placeholder='Enter Your Name' style={{backgroundColor:"rgba(241, 244, 247, 1)"}} id="form2Example1" name='name' className="form-control" />
                    </div>
                    <div className="form-outlinec p-0 mb-4">
                        <label className="form-label" for="form2Example1">Mobile </label>
                        <input type="tel" onChange={handleInput} placeholder='Enter Your Number' style={{backgroundColor:"rgba(241, 244, 247, 1)"}} id="form2Example2" name="phone" className="form-control" />
                    </div>
                    <div className="form-outlinec p-0 mb-4">
                        <label className="form-label" for="form2Example1">How Can We Help You ? </label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="query" onChange={handleInput} style={{backgroundColor:"rgba(241, 244, 247, 1)"}}></textarea>

                    </div>
                    <div className="d-flex justify-content-end">
                        <button type="submit" className='btn btn-warning text-white'>Submit Form</button>
                    </div>

                </form>
                </>
                    )
                }
            </main>
        </section>
    </>
  )
}

export default Query