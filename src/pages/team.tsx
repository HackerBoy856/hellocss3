// @ts-ignore
import React,{ FC } from 'react'
import img_team_bg from '../image/background/team_bg.jpg'
import img_team_bg_m from '../image/background/iphone_size-06.png'
import img_team_pic from '../image/page5/300ppi/team_pic.png'
import img_team_ico1 from '../image/page5/300ppi/team_ico1.png'
import img_team_ico2 from '../image/page5/300ppi/team_ico2.png'
import img_team_ico3 from '../image/page5/300ppi/team_ico3.png'
import img_team_ico4 from '../image/page5/300ppi/team_ico4.png'

interface TeamProps {
}

const Team: FC<TeamProps> = props => {
  return (
    <>
      <div className="team_body">
          <img className="img_team_bg" src={img_team_bg} alt=""/>
          <img className="img_team_bg_m" src={img_team_bg_m} alt=""/>
          <img className="img_team_pic" src={img_team_pic} alt=""/>
          <div className="img_team_ico_div">
              <div className="img_team_div_m">
                  <img className="img_team_ico" src={img_team_ico2} alt=""/>
              </div>
              <div className="img_team_div">
                  <img className="img_team_ico" src={img_team_ico1} alt=""/>
                  <div className="img_team_ico_title">MARY</div>
                  <div className="img_team_ico_des">ARTIST/CO-FOUNDER</div>
                  <div className="img_team_ico_content">Lorem ipsum dolor sit
                      amet, consectetuer adipiscing elit, sed diam
                      nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat. Ut wisi enim ad minim
                      veniam, quis nostrud
                      exerci tation ullamcorper
                      suscipit
                  </div>
              </div>
              <div className="img_team_div">
                  <img className="img_team_ico" src={img_team_ico2} alt=""/>
                  <div className="img_team_ico_title">PETER</div>
                  <div className="img_team_ico_des">ART DIRECTOR/CO-FOUNDER</div>
                  <div className="img_team_ico_content">Lorem ipsum dolor sit
                      amet, consectetuer adipiscing elit, sed diam
                      nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat. Ut wisi enim ad minim
                      veniam, quis nostrud
                      exerci tation ullamcorper
                      suscipit
                  </div>
              </div>
              <div className="img_team_div">
                  <img className="img_team_ico" src={img_team_ico3} alt=""/>
                  <div className="img_team_ico_title">BEN</div>
                  <div className="img_team_ico_des">PROJECT COORDINATOR</div>
                  <div className="img_team_ico_content">Lorem ipsum dolor sit
                      amet, consectetuer adipiscing elit, sed diam
                      nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat. Ut wisi enim ad minim
                      veniam, quis nostrud
                      exerci tation ullamcorper
                      suscipit
                  </div>
              </div>
              <div className="img_team_div">
                  <img className="img_team_ico" src={img_team_ico4} alt=""/>
                  <div className="img_team_ico_title">JOHN</div>
                  <div className="img_team_ico_des">WEB DEVELOPER</div>
                  <div className="img_team_ico_content">Lorem ipsum dolor sit
                      amet, consectetuer adipiscing elit, sed diam
                      nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat. Ut wisi enim ad minim
                      veniam, quis nostrud
                      exerci tation ullamcorper
                      suscipit
                  </div>
              </div>
          </div>

      </div>
    </>
  )
}

export default Team;