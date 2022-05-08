import React,{ FC, useEffect, useState } from 'react'
import { useHistory} from 'react-router-dom'
import bg from '../asset/image/bcg.png'
import galley from '../asset/image/gallery.svg'
import roadMap from '../asset/image/roadmap.svg'
import connent from '../asset/image/connect.svg'
import mininext from '../asset/image/mintnest.svg'
import coco from '../asset/image/coocoovilla.svg'
import founders from '../asset/image/founders.svg'
import h5bg from '../asset/image/bg.png'
import "../style/index.scss"
import Nav from './nav'

interface IndexProps {
}

const Index: FC<IndexProps> = props => {
  const history = useHistory()
  const toGallery = () => {
    history.push('/gallery')
  }
  const toRoadmap = () => {
    history.push('/roadmap')
  }
  return ( 
      <>
        <div className='main-container'>
            <Nav hasBack={false} />
            <div className="content">
                <img className="bg" src={bg} alt="" />
                <img className="h5-bg" src={h5bg} alt="" />
                <img src={galley} onClick={toGallery} className='galley' />
                <img src={roadMap} onClick={toRoadmap} className='roadMap' />
                <img src={connent}  className='connent' />
                <img src={mininext}  className='mininext' />
                <img src={coco}  className='coco' />
                <img src={founders}  className='founders' />
            </div>
        </div>
      </>
  )
}

export default Index;