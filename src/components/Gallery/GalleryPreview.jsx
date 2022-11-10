import React,{useState} from 'react'
import { GalleryImages } from './GalleryImages'
import './gallerypreview.css'

function GalleryPreview({images}) {
  const [current,setCurrent] = useState(0)
  const [openModal, setOpenModal] = useState(false)
  const length = images.length

  const handleOpenModal = (index) => {
    setCurrent(index)
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  const nextSlide = () => {
    setCurrent(current === length -1 ? 0 : current + 1)
  }

  if(!Array.isArray(images) || images.length <= 0) {
    return null;
}

  return (
    <div>  

      {openModal &&
        <div className='sliderWrap'>
          <i className="fa fa-regular fa-circle-xmark" onClick={handleCloseModal} />
          <i className="fa fa-regular fa-circle-left" onClick={prevSlide} />
          <i className="fa fa-regular fa-circle-right" onClick={nextSlide}/>
          <div className="fullscreenImg">
            <img src={images[current].image} alt='' />
          </div>
        </div>
      }

      <div className='gallery'>
        {
          GalleryImages && GalleryImages.map((slide,index) => {
            return(
              <div className="singleImg" key={index} onClick={ () => handleOpenModal(index)}>
                <img src={slide.image} alt="" className='galleryimg'/>
              </div>   
            )
          })
        }
      </div>
    </div>
  )
}

export default GalleryPreview