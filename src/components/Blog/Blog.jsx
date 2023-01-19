import React from 'react'
import {BlogItems} from './BlogItems'
import { Link } from 'react-router-dom'
import './blog.css'


function Blog() {
  return (
    <>
        <div className="mainContainer">
            <div className="blogContainer">
                {BlogItems.map((item) => (
                    <Link to={`/writing/post/${item.id}`} className='postLink'>
                    <div className="blogCard" key={item.id}>
                        <div className="postImg">
                            <img  src={item.cover} alt="" />
                        </div>
                        <div className="postDetails">
                            <h3 className='postTitle'>{item.title}</h3>
                            
                            <p className='postDesc'>{item.desc}</p> 
                        </div>
                    </div> 
                    </Link>
                ))}
            </div> 
        </div>
    </>
  )
}

export default Blog