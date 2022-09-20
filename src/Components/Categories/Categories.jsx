import React from 'react'
import '../../Assets/Css/category.css'
import Card from '../Common/Card'
import HeadingStrip from '../Common/HeadingStrip'


function Categories() {

    const eventDelegation=(e)=>{
        console.log(e.target.id)
        window.location.hash= `#${e.target.id}`
    }
  return (
    <>
        <section className='category-wrapper d-flex'>
                <main className="categoryList ">
                     <h5 className="p-3 pb-0"> Categories</h5>
                     <hr />
                     <ul className='px-2   scroller' onClick={eventDelegation}>
                        <li id="all">All</li>
                        <li id="c1" className={"active-category"} >Category 1</li>
                        <li id="c2">Category 1</li>
                        <li id="c3">Category 1</li>
                        <li id="c4">Category 1</li>
                        <li id="c5">Category 1</li>
                        <li id="c6">Category 1</li>
                        <li id="c7">Category 1</li>
                        <li id="c8">Category 1</li>
                        <li id="c9">Category 1</li>
                        <li id="c10">Category 1</li>
                     </ul>   
                </main>
                <main className='category-card-wrapper px-4'>
                            <HeadingStrip head={"Category"} sub={false}/>   
                            <div className='d-flex flex-wrap'>
                                    <Card static="19.5vw"/>
                                    <Card static="19.5vw"/>
                                    <Card static="19.5vw"/>
                                    <Card static="19.5vw"/>
                                    <Card static="19.5vw"/>
                                    <Card static="19.5vw"/>
                            </div>         
                </main>
        </section>
    </>
  )
}

export default Categories