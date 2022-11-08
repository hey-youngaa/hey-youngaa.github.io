import React from 'react'
import './about.css'

export default function About() {
  return (
    <div className='main-container'>
      <div className="profile-container">
        <div className="profile-wrapper">
          <div className="profile-text">
            <h1>Hi there!</h1>
            <h2>My name is Jessica Choi</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
             exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
             irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
              deserunt.</p>
          </div>
        </div>
        <div className="profile-wrapper">
          <img src="../images/me.jpg" alt="me" className="profile-img" />
        </div>
      </div>
      <div className="resume-container">
        <div className="left-container">
          <div className="info-wrapper">
            <h2>Education</h2>
            <h3>University of Maryland(2017-2021)</h3>
            <h5>College of Computer, Mathematical, and Natural Sciences</h5>
            <p>Bachelor of Science, General Biology</p>
            <p>Minor in Asian American Studies</p>
          </div>
          <div className="info-wrapper">
            <h2>Technical Skills</h2>
            <h3>Languages</h3>
            <p>Python.JavaScript.HTML/CSS.LaTex</p>
            <h3>Tools</h3>
            <p>React.LINUX</p>
          </div>
          <div className="info-wrapper">
            <h2>Design Tools</h2>
            <p>Figma.Photoshop</p>
          </div>
        </div>
        <div className="right-container">
          <div className="info-wrapper">
            <i className="fas fa-thin fa-paper-plane"></i> <p>jessicahchoi93@gmail.com</p>
            <br></br>
            <i className="fas fa-solid fa-mobile-screen-button"></i> <p>240-938-7074</p>
          </div>
          <div className="info-wrapper">
            <h2>Work Experience</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
             exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
             irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
              deserunt.</p>
          </div>
          <div className="info-wrapper"></div>
        </div>
      </div>
      <div className="resume-link">
        <a href='../documents/resume.pdf' target='_blank'>download resume here</a>
      </div>
    </div>
  )
}
