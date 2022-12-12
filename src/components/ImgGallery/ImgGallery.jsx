import React,{useState} from 'react'
import Masonry,{ResponsiveMasonry} from 'react-responsive-masonry';
import {galleryImages} from './galleryImages'
import './imggallery.css'


const ImgGallery = () => {
  const [data,setData] = useState({img: '', i: 0})
  
  const viewImg = (img, i) => {
    setData({img,i})
  }
  const imgAction = (action) => {
    let i = data.i
    if (action === 'nextImg'){
      setData({img:galleryImages[i+1], i: i+1});
    }
    if (action === 'prevImg'){
      setData({img:galleryImages[i-1], i: i-1});
    }
    if (!action){
      setData({img:'', i: 0})
    }
  }

  return (
    <>
      {data.img &&
        <div className='modal_img'>
          <button className='close' onClick={() => imgAction()}>X</button>
          <button className='previous' onClick={() => imgAction('prevImg')}>Previous</button>
          <img src={data.img.src} alt='' className='bigImg' />
          <button className='next'onClick={() => imgAction('nextImg')} >Next</button>
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
                onClick={() => viewImg(item,i)}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  );
}

export default ImgGallery;