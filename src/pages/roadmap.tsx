import React from 'react'
import roadmapImg from '../asset/image/roadmapPage.png'
import roadmapImg_h5 from '../asset/image/roadmapPage_h5.jpg'
import '../style/index.scss'
import Nav from "./nav";
const Roadmap = () => {
  return (
    <div className='road-body'>
        <Nav />
        <img src={roadmapImg} className='road-bg' />
        <img src={roadmapImg_h5} alt="" className="road-h5-bg"/>
    </div>
  )
}

export default Roadmap
