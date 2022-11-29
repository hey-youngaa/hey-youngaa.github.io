import React,{useState} from 'react'
import {galleryImages} from './galleryImages'
import './imggallery.css'

function ImgGallery() {
  const [modal,setModal] = useState(false)
  const [tempImage, setTempImage] = useState('')

  const viewImg = (image) => {
    setTempImage(image);
    setModal(true)
  }
  
  return (
    <>
      <div className={modal ? 'modal open' : 'modal'}>
        <img src={tempImage} alt="" />
      </div>
      <div className='gallery-container'>
        {galleryImages.map((item,i) => (
          <div className="singleImg" key={i} onClick={() => viewImg(item.image)} >
            <img  src={item.image} alt="" />
          </div>
        ))}
      </div>
    </>
    
  )
}

export default ImgGallery