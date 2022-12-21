import React,{useState} from 'react'
import Masonry,{ResponsiveMasonry} from 'react-responsive-masonry';
import {galleryImages} from './galleryImages'
import './imggallery.css'
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ImgGallery = () => {
  const [slideNumber, setSlideNumber] = useState(0)
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = (index) => {
    setSlideNumber(index)
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  const prevSlide = () => {
    slideNumber === 0 
    ? setSlideNumber( galleryImages.length -1 ) 
    : setSlideNumber( slideNumber - 1 )
  }

  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length 
    ? setSlideNumber(0) 
    : setSlideNumber(slideNumber + 1)
  }

  return (
    <>
      {openModal &&
        <div className='modal_img'>
          <CloseIcon className='close' onClick={handleCloseModal} />
          <ArrowBackIosIcon className='previous' onClick={prevSlide}/>
          <img src={galleryImages[slideNumber].src} alt='' className='bigImg' />
          <ArrowForwardIosIcon className='next' onClick={nextSlide} />
        </div>
      }
      <div className='masonry_container'>
        <ResponsiveMasonry columnsCountBreakPoints={{350:1, 750:2, 900:3}}>
          <Masonry gutter='10px'>
            {galleryImages.map((item,i) => (
              <img 
                key={i}
                src={item.src}
                alt=""
                className='singleImg'
                onClick={() => handleOpenModal(i)}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  );
}

export default ImgGallery;