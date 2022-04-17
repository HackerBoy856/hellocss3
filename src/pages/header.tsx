// @ts-ignore
import React,{ FC } from 'react'
import img_header_bg from '../image/background/header_bg.jpg'
import img_header_nav from '../image/page1/300ppi/header_nav.png'
import img_header_font from '../image/page1/300ppi/header_font.png'
import img_header_left_pic from '../image/page1/300ppi/header_left_pic.png'
import img_header_right_pic from '../image/page1/300ppi/header_right_pic.png'
import img_header_bottom_pic from '../image/page1/300ppi/header_botton_pic.png'

interface HeaderProps {
}

const Header: FC<HeaderProps> = props => {
  const {
  }=props
  return (
    <>
      <div className="header_body">
        <img className="header_bg_img" src={img_header_bg} alt=""/>
        <div className="header_nav_div">
          <img className="header_nav" src={img_header_nav} alt="" />
          <div className="header_nav_menu">
            <div className="header_nav_menu_li">WORKSHOP</div>
            <div className="header_nav_menu_li">SHOP</div>
            <div className="header_nav_menu_li">YOURSSTUFF</div>
            <div className="header_nav_menu_li">CONNECT</div>
          </div>
        </div>
        <img className="img_header_font" src={img_header_font} alt=""/>
        <img className="img_header_left_pic" src={img_header_left_pic} alt=""/>
        <img className="img_header_bottom_pic" src={img_header_bottom_pic} alt=""/>
        <img className="img_header_right_pic" src={img_header_right_pic} alt=""/>
      </div>

    </>
  )
}

export default Header;