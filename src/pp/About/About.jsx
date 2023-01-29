import React from 'react'
import './about.css'

export default function About() {
  return (
    <div className='main-container'>
      <div className="profile-container">
        <div className="text-wrapper">
          <h2>Hi there!</h2>
          <h1>My name is Jessica Choi.</h1>
          <p>
            I graduated with the intent of pursuing a career in Biolgical research
            Currently I'm learning how to code and design to become a UX/UI designer.
            And you are looking at my very first website! 
            <br/>
            <br/>
            Some fun facts about me, I'm an amateuar photographer,
            nature documentaries enthusiast and bread lover 
          </p>
        </div>
        <div className="propic-wrapper">
          <img src="../images/me.JPG" alt="profile pic" />
        </div>
      </div>


      <div className="resume-container">
        <div className="left-container">
          <div className="info-wrapper education">
            <h2>Education</h2>
            <hr />
            <h3>University of Maryland <span>2017-2021</span></h3>
            <h5>College of Computer, Mathematical, and Natural Sciences</h5>
            <p>Bachelor of Science, General Biology</p>
            <p>Minor in Asian American Studies</p>
          </div>
          <div className="info-wrapper skills">
            <h2>Technical Skills</h2>
            <hr />
            <h3>Languages</h3>
            <p>Python, JavaScript, HTML, CSS, LaTex</p>
            <h3>Tools</h3>
            <p>React, Visual Studio, LINUX</p>
          </div>
          <div className="info-wrapper tools">
            <h2>Design Tools</h2>
            <hr />
            <p>Figma, Photoshop</p>
          </div>
          <div className="info-wrapper">
            <hr />
            <i className="fas fa-thin fa-paper-plane"></i> <p>jessicahchoi93@gmail.com</p>
            <br></br>
            <i className="fas fa-solid fa-mobile-screen-button"></i> <p>240-938-7074</p>
          </div>
        </div>
        <div className="right-container">
          <div className="info-wrapper">
            <h2>Work Experience</h2>
            <hr />
            <h3>GeneDx
            <br/>
            <span>April 2020 - January 2021</span>
            </h3>
            <p>
              Received and triaged all COVID-19 testing specimens while peforming quality
              control for the accessioned data.
              <br />
              <br />
              Assigned accession numbers to 200-400 specimens per day and entered in patient
              and facility information into the LIMS databse with adherence to HIPPA
            </p>
            <br />
            <h3>First-Year Innovation Research Experience Program
            <br/>
            <span>August 2017 - May 2019</span></h3>
            <p>
              Guided students throughout lab experiments and maintained supply of Drosophila
              melanogaster flies and reagents
              <br />
              <br />
              Conducted experiments for larval genotyping and gene expression
            </p>
              <br />
            <h3>Note taker
              <br/>
            <span>August 2019 - December 2019</span></h3>
            <p>
              Wrote course notes for accessibility & disability service students throughout
              the fall semester
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="resume-link">
        <a href='../documents/resume.pdf' target='_blank'>download resume here</a>
      </div>
    </div>
  )
}
