import React,{ FC, useEffect, useState } from 'react'
import icon from '../asset/image/icon-04.svg'
import twitterIcon from '../asset/image/twitter.svg'
import discordIcon from '../asset/image/discordIcon.svg'
import instagramIcon from '../asset/image/instagram.svg'
import bg from '../asset/image/bcg.png'
import galley from '../asset/image/gallery.png'
import roadMap from '../asset/image/roadmap.png'
import connent from '../asset/image/connect.png'
import mininext from '../asset/image/mintnest.png'
import coco from '../asset/image/coocoovilla.png'
import founders from '../asset/image/founders.png'
import h5bg from '../asset/image/bg.png'
interface MainProps {
}

const Index: FC<MainProps> = props => {
  const {}=props
  return (
      <>
        <div className='main-container'>
            <div className='top-nav'>
                <div className='nav-container'>
                    <div className='nav-left'>
                        <img src={icon} />
                    </div>
                    <div className='nav-center'>
                        <span>DISCORD</span>
                        <span>TWITTER</span>
                        <span>DPE&SEA</span>
                        <span>XXXXX</span>
                    </div>
                </div>
                <div className="nav-right">
                    <img src={twitterIcon} />
                    <img src={discordIcon} />
                    <img src={instagramIcon} />
                </div>
            </div>
            <div className="content">
                <img className="bg" src={bg} alt="" />
                <img className="h5-bg" src={h5bg} alt="" />
                <img src={galley}  className='galley' />
                <img src={roadMap}  className='roadMap' />
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