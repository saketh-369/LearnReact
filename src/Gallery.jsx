import React from 'react'
import './Gallery.css'

function Gallery({image}) {
  
  return (
    <div className='gallery_align'>
      Gallery <br />
      {image}
    </div>
  )
}

export default Gallery
