import React, { useEffect, useState } from 'react'
import '../../Assets/Css/category.css'
import { getCategoriesList } from '../Api/Api';
import Card from '../Common/Card'
import HeadingStrip from '../Common/HeadingStrip'


function Categories() {
  const [categoriesList,setCategoriesList]=useState([]);
  const [selectedCategory,setSelectedCategory]=useState("")
    const handleCategory=(item)=>{
      setSelectedCategory(item);
    }

    const fetchCategoriesList=async()=>{
      const res= await getCategoriesList();
      setCategoriesList(res.data.data[0].category);
    }
  useEffect(()=>{
    fetchCategoriesList();
  },[])
  

  return (
    <>
        <section className='category-wrapper d-flex'>
                <main className="categoryList ">
                     <h5 className="p-3 pb-0"> Categories</h5>
                     <hr />
                     <ul className='px-2   scroller'>
                      <li className={` ${ selectedCategory==="" ? "active-category" :""}  `}  onClick={()=> handleCategory("")} >All</li>
                      {
                        categoriesList.map(item=>{
                          return <li onClick={()=> handleCategory(item)} className={` ${ selectedCategory===item ? "active-category" :""}  `} >{item}</li>
                        })
                      }
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