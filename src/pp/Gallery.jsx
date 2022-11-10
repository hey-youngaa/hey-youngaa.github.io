import React from 'react'
import { GalleryImages } from '../components/Gallery/GalleryImages'
import GalleryPreview from '../components/Gallery/GalleryPreview'
import ImgSlider from '../components/ImgSlider/ImgSlider'
import { SliderData } from '../components/ImgSlider/SliderData'
import './gallery.css'

function Gallery() {
  return (
    <div className='main-container'>
        <div className="gallery-container">
            <GalleryPreview images={GalleryImages}/>
        </div>
        <br />
        <br />
        <br />
        <div className="slider-post-container">
          <div className="slider-wrapper">
            <ImgSlider slides={SliderData} />
          </div>
          <div className="post-wrapper">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore mag
            aliqua. Ut enim ad minim veniam, quis nostrud exercitati
            ullamco laboris nisi ut aliquip ex ea commodo consequatu
            .is aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteursi
            </p>
          </div>
        </div>
        <br />
        <br />
        <div className="video-container">
          <div className="sf-video">
            <video src='../videos/park.MOV' autoPlay loop muted></video>
          </div>
        </div>
    </div>
  )
}

export default Gallery