// @ts-ignore
import React, {FC} from 'react'
import icon from "../asset/image/icon-04.svg";
import twitterIcon from "../asset/image/twitter.svg";
import discordIcon from "../asset/image/discordIcon.svg";
import instagramIcon from "../asset/image/instagram.svg";
import backImg from '../asset/image/back.png'
import {useHistory} from "react-router-dom";

interface NavProps {
    hasBack?: boolean
}

const Nav: FC<NavProps> = props => {
    const {hasBack = true} = props
    const history = useHistory()
    return (
        <>
            <div className='top-nav'>
                {hasBack && <img src={backImg} alt="" className="nav_back" onClick={() => {
                    history.push('/')
                }}/>}
                <div className='nav-container'>
                    <div className='nav-left'>
                        <img src={icon}/>
                    </div>
                    <div className='nav-center'>
                        <span>DISCORD</span>
                        <span>TWITTER</span>
                        <span>DPE&SEA</span>
                        <span>XXXXX</span>
                    </div>
                </div>
                <div className="nav-right">
                    <img src={twitterIcon}/>
                    <img src={discordIcon}/>
                    <img src={instagramIcon}/>
                </div>
            </div>
        </>
    )
}

export default Nav;