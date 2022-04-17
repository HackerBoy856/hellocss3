// @ts-ignore
import React,{ FC } from 'react'
import img_footer_bg from '../image/background/footer_bg.jpg'
import img_footer_bg_m from '../image/background/iphone_size-07.png'
import img_footer_pic from '../image/page6/300ppi/footer_pic.png'
import img_footer_view_pic from '../image/page6/300ppi/img_footer_view_pic.png'
import img_footer_ico1 from '../image/page6/300ppi/footer_ico1.png'
import img_footer_ico2 from '../image/page6/300ppi/footer_ico2.png'
import img_footer_ico3 from '../image/page6/300ppi/footer_ico3.png'

interface FooterProps {
}

const Footer: FC<FooterProps> = props => {
  return (
    <>
      <div className="footer_body">
          <img className="img_footer_bg" src={img_footer_bg} alt=""/>
          <img className="img_footer_bg_m" src={img_footer_bg_m} alt=""/>


          <img className="img_foot_pic" src={img_footer_pic} alt=""/>
          <img className="img_footer_view_pic" src={img_footer_view_pic} alt=""/>
          <div className="img_footer_font">Follow Coffin90 on Twitter, Instagram or Discord</div>
          <div className="img_footer_ico_div">
              <img className="img_footer_ico" src={img_footer_ico1} alt=""/>
              <img className="img_footer_ico" src={img_footer_ico2} alt=""/>
              <img className="img_footer_ico" src={img_footer_ico3} alt=""/>
          </div>
      </div>
    </>
  )
}

export default Footer;