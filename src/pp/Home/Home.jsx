import React from 'react'
import './home.css'
import waves from '../../media/waves.mov'
export default function Home() {
  return (
    <div className='main-container'>
      <video src={waves} autoPlay loop muted></video>
    </div>
  )
}
