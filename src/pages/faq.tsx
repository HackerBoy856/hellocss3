// @ts-ignore
import React,{ FC } from 'react'
import img_faq_bg from '../image/background/faq_bg.jpg'
import img_faq_font from '../image/page4/300ppi/font_faq.png'
import img_faq_border from '../image/page4/300ppi/faq_border.png'
import img_ico1 from '../image/page4/300ppi/icov1.png'
import img_ico2 from '../image/page4/300ppi/icov2.png'
import img_ico3 from '../image/page4/300ppi/icov3.png'
import img_ico4 from '../image/page4/300ppi/icov4.png'
import img_ico5 from '../image/page4/300ppi/icov5.png'
import img_ico6 from '../image/page4/300ppi/icov6.png'
import img_ico7 from '../image/page4/300ppi/icov7.png'
import img_ico8 from '../image/page4/300ppi/icov8.png'


interface FaqProps {
}

const Faq: FC<FaqProps> = props => {
  const {
  }=props
  return (
    <>
      <div className="faq_body">
        <img className="faq_bg" src={img_faq_bg} alt=""/>
          <img className="img_faq_font" src={img_faq_font} alt=""/>
          <img className="img_faq_border" src={img_faq_border} alt=""/>
          <div className="faq_title">WHAT IS COFFIN90?</div>
        <div className="faq_content">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
          tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
          nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo conse
          quat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie conse
          quat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignis
          sim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
          Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod
          tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
        </div>
        <div className="faq_icons_font">icons for FAQ</div>
        <div className="faq_ico_border">
          <img className="faq_border_icov" src={img_ico1} alt=""/>
          <img className="faq_border_icov" src={img_ico2} alt=""/>
          <img className="faq_border_icov" src={img_ico3} alt=""/>
          <img className="faq_border_icov" src={img_ico4} alt=""/>
          <img className="faq_border_icov" src={img_ico5} alt=""/>
          <img className="faq_border_icov" src={img_ico6} alt=""/>
          <img className="faq_border_icov" src={img_ico7} alt=""/>
          <img className="faq_border_icov" src={img_ico8} alt=""/>
        </div>
      </div>
    </>
  )
}

export default Faq;