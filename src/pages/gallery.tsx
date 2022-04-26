import React from 'react'
import construcImg from '../asset/image/construction.jpg'
import construcH5 from '../asset/image/construc-h5.jpg'
import "../style/index.scss"
import Nav from './nav'
const  Gallery: React.FC = () => {
  return (
    <div className='galleybody'>
        <Nav />
        <img src={construcImg} className='galley_bg' />
        <img src={construcH5} className='galley-h5bg' />
    </div>
  )
}

export default Gallery