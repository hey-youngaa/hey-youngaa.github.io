 import React, {useState, useEffect} from 'react'
 import './postdetails.css'
 import { BlogItems } from '../../components/Blog/BlogItems'
 import { useParams } from 'react-router-dom'

 
export const PostDetails = () => {
    const {id} = useParams()
    const [posts, setPosts] = useState(null)

    useEffect(() => {
        let posts = BlogItems.find((post) => post.id === parseInt(id))
        if (posts){
            setPosts(posts)
        }
    },[id])

    return (
        <>
            {posts ? (
                <section className="singlePost">
                    <div className="postContainer">
                        <div className="postImgWrapper">
                            <img src={posts.cover} alt="" />
                        </div>
                        <div className="postTextWrapper">
                            <h1>{posts.title}</h1>
                            <p>{posts.text1}</p>
                            <p>{posts.text2}</p>
                            <p>{posts.text3}</p>
                        </div> 
                    </div>
                </section>
            ) : null}
        </>
    )
}