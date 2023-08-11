import React from 'react'
import './home.css'
import waves from '../../media/waves.mov'

export default function Home() {
  return (
    <div className='main-container'>
      <video autoPlay loop muted>
        <source src={waves} type="video/mov" />
      </video>
    </div>
  )
}
