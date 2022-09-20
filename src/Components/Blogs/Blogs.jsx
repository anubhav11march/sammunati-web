import React from 'react'
import HeadingStrip from '../Common/HeadingStrip'
import BlogCard from './BlogCard'
import '../../Assets/Css/blog.css'

function Blogs() {
  return (
    <>
        <section className='w-100 scroller blog-wrapper ps-3'>
                <HeadingStrip head={"Blogs"} sub={false}/>
                <main className='  d-flex flex-wrap'>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                </main>
        </section>
    </>
  )
}

export default Blogs