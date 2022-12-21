import React from 'react'
import {BlogItems} from './BlogItems'
import { Link } from 'react-router-dom'
import './blog.css'


function Blog() {
  return (
    <>
        <div className="main_container">
            <div className="blog_container">
                {BlogItems.map((item) => (
                    <div className="blog_card" key={item.id}>
                        <div className="post_img">
                            <img  src={item.cover} alt="" />
                        </div>
                        <div className="post_details">
                            <Link to='/blog/{item.id}' >
                                <h3>{item.title}</h3>
                            </Link>
                            <p>{item.desc}</p> 
                        </div>
                    </div>
                ))}
            </div> 
        </div>
    </>
  )
}

export default Blog