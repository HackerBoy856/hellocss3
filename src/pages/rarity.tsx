// @ts-ignore
import React, {FC} from 'react'
import img_rarity_bg from '../image/background/rarity_bg.jpg'
import img_rarity_border_pic from '../image/page3/300ppi/rarity_border_pic.png'
import img_rarity_mu from '../image/page3/300ppi/rarity_mu.png'
import img_detail_font_bg from '../image/page4/300ppi/font_bg.jpg'
import img_rarity_border_pic_m from '../image/page3/300ppi/rarity_border_pic_m.png'
import img_rarity_border_title_m from '../image/page3/300ppi/rarity_border_title.png'
import img_rarity_border_bottom_m from '../image/page3/300ppi/rarity_border_bottom_m.png'

interface RarityProps {
}

const Rarity: FC<RarityProps> = props => {
    const {} = props
    return (
        <>
            <div className="rarity_body">
                <img className="img_rarity_bg" src={img_rarity_bg} alt=""/>
                <img className="img_rarity_border_pic" src={img_rarity_border_pic} alt=""/>
                {/* 移动端 */}
                <img className="img_rarity_border_pic_m" src={img_rarity_border_pic_m} alt=""/>
                <img className="img_rarity_border_title_m" src={img_rarity_border_title_m} alt=""/>
                <img className="img_rarity_border_bottom_m" src={img_rarity_border_bottom_m} alt=""/>

                <div className="rarity_mu_div">
                    <img className="img_rarity_mu" src={img_rarity_mu} alt=""/>
                    <div className="rarity_mu_font">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                        nonummy
                        nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
                    </div>
                </div>
                <div className="rarity_font_div">
                    <div className="rarity_font_div_flex">
                        <div className="rarity_font_div_flex_main">TYPES</div>
                        <div className="rarity_font_div_flex_detail">
                            <img className="img_detail_font_bg" src={img_detail_font_bg} alt=""/>
                            <div className="rarity_font_div_flex_detail_left"> 5,000</div>
                            <div className="rarity_font_div_flex_detail_right"> total coffin90</div>
                        </div>
                        <div className="rarity_font_div_flex_detail">
                            <div className="rarity_font_div_flex_detail_left">Common</div>
                            <div className="rarity_font_div_flex_detail_right">Thumbs up</div>
                        </div>
                        <div className="rarity_font_div_flex_detail">
                            <img className="img_detail_font_bg" src={img_detail_font_bg} alt=""/>
                            <div className="rarity_font_div_flex_detail_left">Less Common</div>
                            <div className="rarity_font_div_flex_detail_right">no clothes</div>
                        </div>
                        <div className="rarity_font_div_flex_detail">
                            <div className="rarity_font_div_flex_detail_left">Rare</div>
                            <div className="rarity_font_div_flex_detail_right">??????????</div>
                        </div>
                        <div className="rarity_font_div_flex_detail">
                            <img className="img_detail_font_bg" src={img_detail_font_bg} alt=""/>
                            <div className="rarity_font_div_flex_detail_left">Super Rare</div>
                            <div className="rarity_font_div_flex_detail_right">???????????</div>
                        </div>

                    </div>
                    <div className="rarity_font_div_flex">
                        <div className="rarity_font_div_flex_main">VARIATIONS</div>
                        <div className="rarity_font_div_flex_detail">
                            <img className="img_detail_font_bg" src={img_detail_font_bg} alt=""/>
                            <div className="rarity_font_div_flex_detail_left">50</div>
                            <div className="rarity_font_div_flex_detail_right">??????????</div>
                        </div>
                        <div className="rarity_font_div_flex_detail">
                            <div className="rarity_font_div_flex_detail_left">30</div>
                            <div className="rarity_font_div_flex_detail_right">??????????</div>
                        </div>
                        <div className="rarity_font_div_flex_detail">
                            <img className="img_detail_font_bg" src={img_detail_font_bg} alt=""/>
                            <div className="rarity_font_div_flex_detail_left">20</div>
                            <div className="rarity_font_div_flex_detail_right">??????????</div>
                        </div>
                        <div className="rarity_font_div_flex_detail">
                            <div className="rarity_font_div_flex_detail_left">30</div>
                            <div className="rarity_font_div_flex_detail_right">??????????</div>
                        </div>
                        <div className="rarity_font_div_flex_detail">
                            <img className="img_detail_font_bg" src={img_detail_font_bg} alt=""/>
                            <div className="rarity_font_div_flex_detail_left">30</div>
                            <div className="rarity_font_div_flex_detail_right">??????????</div>
                        </div>
                        <div className="rarity_font_div_flex_detail">
                            <div className="rarity_font_div_flex_detail_left">30</div>
                            <div className="rarity_font_div_flex_detail_right">??????????</div>
                        </div>
                        <div className="rarity_font_div_flex_detail">
                            <img className="img_detail_font_bg" src={img_detail_font_bg} alt=""/>
                            <div className="rarity_font_div_flex_detail_left">30</div>
                            <div className="rarity_font_div_flex_detail_right">??????????</div>
                        </div>
                        <div className="rarity_font_div_flex_detail">
                            <div className="rarity_font_div_flex_detail_left">30</div>
                            <div className="rarity_font_div_flex_detail_right">??????????</div>
                        </div>
                        <div className="rarity_font_div_flex_detail">
                            <img className="img_detail_font_bg" src={img_detail_font_bg} alt=""/>
                            <div className="rarity_font_div_flex_detail_left">30</div>
                            <div className="rarity_font_div_flex_detail_right">??????????</div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Rarity;