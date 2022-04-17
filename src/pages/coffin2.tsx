 // @ts-ignore
import React,{ FC } from 'react'
import img_coffin2_bg from '../image/background/Coffin90_bg3.jpg'
import img_coffin2_pic from '../image/page2/300ppi/coffin2_pic2.png'
import img_coffin2_m_pic from '../image/page6/300ppi/footer_pic.png'
import img_coffin2_m_bottom from '../image/page2/300ppi/coffin2_m_bottom.png'

interface Coffin2Props {
}

const Coffin2: FC<Coffin2Props> = props => {
  const {
  }=props
  return (
    <>
      <div className="coffin2_body">
        <img className="coffin2_bg_img" src={img_coffin2_bg} alt=""/>
        <img className="coffin2_pic" src={img_coffin2_pic} alt=""/>
        {/* 移动端 */}
        <img className="img_coffin2_m_bottom" src={img_coffin2_m_bottom} alt=""/>
        <img className="coffin2_m_pic" src={img_coffin2_m_pic} alt=""/>
      </div>
    </>

  )
}

export default Coffin2;