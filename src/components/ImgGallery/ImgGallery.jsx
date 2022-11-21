import React,{useState} from 'react'
import Masonry,{ResponsiveMasonry} from 'react-responsive-masonry'
import { galleryImages } from './galleryImages'
import './imggallery.css'

function ImgGallery() {
    const [data,setData] = useState({img: '', i: 0})
    
    
    const viewImage = (img, i) => {
        setData({img,i})
    }
  
    const imgAction = (action) => {
        let i = data.i;
        if (action === 'nextImg'){
            setData({img:galleryImages[i + 1], i: i + 1})
        }
        if (action === 'prevImg'){
            setData({img: galleryImages[i - 1], i: i - 1})
        }
        if (!action){
            setData({img:'', i:0})
        }
    }

    return (
    <>
        {data.img && 
            <div className='img_modal'>
                <i className="fa-regular fa-circle-xmark closeImg" onClick={() =>imgAction()} />
                <i className="fa-solid fa-chevron-left leftArrow" onCLick={() => imgAction('prevImg')}/>
                <i className="fa-solid fa-chevron-right rightArrow" onClick={() => imgAction('nextImg')} />
                <img src={data.img} alt="" className='bigImg'/>
            </div>
        }

        <div className='img_gallery_container'>
            <ResponsiveMasonry>
                <Masonry columnsCount={3} gutter="10px">
                    {galleryImages.map((item, i) => (
                        <img
                            key={i}
                            src={item.image}
                            alt=""
                            onClick={() => viewImage(item,i)}
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </div>
    </>
    )
}

export default ImgGallery