import React from 'react'
import cardImage from '../../Assets/Images/cardImage.jpg'
import '../../Assets/Css/blog.css'
import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import { useLocation } from "react-router-dom";

function Singleblog() {
  const location = useLocation();
  const data=location.state;
  return (
    <>
        <section className="singleBlog-wrapper w-100 ">
            <main className="singleBlog-img-container">
                    <img src={data.thumbnail} alt="No blog " />
            </main>
            <div className='d-flex container my-4'>
            <Button size="small text-dark d-flex align-items-center"><FavoriteBorderIcon/> <p className='ps-2'>123</p></Button>
            <Button size="small text-dark  align-self-flex-end"><ShareIcon/></Button>
            </div>
            <main className="container">
                    <p>{data.content}</p>
            </main>
        </section>
    </>
  )
}

export default Singleblog