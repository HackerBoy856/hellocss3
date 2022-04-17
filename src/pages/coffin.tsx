// @ts-ignore
import React,{ FC } from 'react'
import img_coffin_bg from '../image/background/Coffin90_bg2.jpg'
import img_coffin_border from '../image/page2/300ppi/coffin_border.png'
import img_coffin_content_font from '../image/page2/300ppi/coffin_content_font.png'
import img_coffin_content_bottom from '../image/page2/300ppi/coffin_content_bottom.png'
import img_coffin_bottom_pic from '../image/page2/300ppi/coffin_bottom_pic.png'
import img_coffin_border_m  from  '../image/page2/300ppi/coffin_boder_m.png'
interface CoffinProps {
}

const Coffin: FC<CoffinProps> = props => {
  const {
  }=props
  return (
    <>
      <div className="coffin_body">
        <img className="coffin_bg_img" src={img_coffin_bg} alt=""/>
        <img className="img_coffin_border" src={img_coffin_border} alt=""/>
        <img className="img_coffin_border_m" src={img_coffin_border_m} alt=""/>
        <img className="img_coffin_content_font" src={img_coffin_content_font} alt=""/>
        <div className="coffin_content">
          Lorem ipsum dolor sit amet, consectetuer adipiscing
          elit, sed diam nonummy nibh euismod tincidunt ut
          laoreet dolore magna aliquam erat volutpat. Ut wisi
          enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in
          hendrerit in vulputate velit esse molestie consequat,
          vel illum dolore eu feugiat nulla facilisis at vero eros
          et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
          Lorem ipsum dolor sit amet, cons ectetuer adipiscing
          elit, sed diam nonummy nibh euismod tincidunt ut
          laoreet dolore magna aliquam erat volutpat. Ut wisi
          enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Lorem ipsum dolor sit amet, consectetuer adipiscing
        </div>
        <img className="img_coffin_content_bottom" src={img_coffin_content_bottom} alt=""/>
        <img className="img_coffin_bottom_pic" src={img_coffin_bottom_pic} alt=""/>
      </div>
    </>
  )
}

export default Coffin;