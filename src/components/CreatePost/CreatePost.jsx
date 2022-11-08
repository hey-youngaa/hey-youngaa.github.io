import React from 'react'
import './createpost.css'

function CreatePost() {
  
  
  return (
    <div className='main-container'>
        <div className="cp-container">
            <h1>Create A Post</h1>
            <div className="input-area">
                <label htmlFor="">Title:</label>
                <input type="text" placeholder='Title...'/>
            </div>
            <div className="input-area">
                <label htmlFor="">Post:</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <button>Submit Post</button>
        </div>
    </div>
  )
}

export default CreatePost